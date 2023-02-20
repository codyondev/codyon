import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

import { DefaultFeedSettings } from '@custom-types/kakao';

const initialSettings: Partial<DefaultFeedSettings> = {
  objectType: 'feed',
  buttons: [
    {
      title: '웹으로 이동',
      link: {
        mobileWebUrl: 'https://www.codyon.site',
        webUrl: 'https://www.codyon.site',
      },
    },
  ],
};

const useKakaoFeedShare = (container?: `#${string}`) => {
  useEffect(() => {
    if (!window.Kakao?.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SCRIPT_KEY ?? '');
    }
  }, []);

  const createButton = useCallback(
    (settings: Partial<DefaultFeedSettings>) => {
      try {
        if (!container) throw Error('container_is_required');
        return window.Kakao.Share.createDefaultButton<DefaultFeedSettings>({
          container,
          ...initialSettings,
          ...settings,
        });
      } catch {
        toast.error('공유 기능을 사용할 수 없습니다.');
      }
    },
    [container],
  );

  const sendKakao = useCallback(
    (settings: Partial<DefaultFeedSettings>) =>
      window.Kakao.Share.sendDefault<DefaultFeedSettings>({
        ...initialSettings,
        ...settings,
      }),
    [],
  );

  return { createButton, sendKakao };
};

export default useKakaoFeedShare;
