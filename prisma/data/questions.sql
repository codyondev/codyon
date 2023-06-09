INSERT INTO 
    "fashion_test.question" 
        (id, sequence, text, image) 
    VALUES
        ('d3803b0b-b63f-40a1-b0a6-59d3744156e1', 1, '나는 어느 정도 노출이 있는 옷도 과감하게 시도할 수 있습니다.', NULL),
        ('6fba6a79-a796-4e0d-8abe-d2accbaf43e6', 2, '다음 두 의류 중, 평소 나의 스타일과 잘 어울리는 의류이거나, 내가 더 선호하는 의류는?', NULL),
        ('3f367074-d450-4d8b-8487-6ba905b2d812', 3, '나는 코디를 할 때, 포인트 요소를 최소화 하려고 노력하는 편입니다.', NULL),
        ('9c94b561-cd13-4936-9ce0-f7c5b4dbd5b2', 4, '나는 꾸며입을 때, 화려해 보이는 옷들로 코디를 하는 편입니다.', NULL),
        ('dec438da-4bf7-4316-a375-b57f012e2e86', 5, '사진과 같은 블레이저를 입었을 때, 하의를 입는다면 두 바지 중', NULL),
        ('685dcb48-39bc-4486-856a-6b86a331cf43', 6, '다음은 동일한 브랜드의 디자인만 다른 동일한 의류의 사진입니다. 이들 중 본인이 더 선호하는 의류는?', NULL),
        ('b450ce53-e1f5-444c-b621-2fa7c7d7d905', 7, '나는 TV에 나온 연예인들의 코디를 보던 중, ''내 스타일이 훨씬 멋있는데?'' 라는 생각을...☆', NULL),
        ('11a4c9c4-5c68-43ec-ab1b-21110f391212', 8, '나의 패션은 눈에 띄고 화려하기보단, 깔끔하고 무난한 편입니다.', NULL),
        ('0a893169-f0ec-4916-abf6-2e948f60a31a', 9, '나는 시험 기간에 공부하러 열람실, 카페, 독서실을 갈 때 멋을 위해 불편하더라도 눈에 띄는 옷을 입고 가는 행동에 공감이 됩니다.', NULL),
        ('a1957a76-e4b8-4160-bbcb-c3918f7c71b5', 10, '나는 강렬한 컬러의 옷들을 시도하는것에 거리낌이 없습니다.', NULL),
        ('5fabf3ee-e5cd-44df-ab16-650194d58bc2', 11, '나는 추운 날씨에도 최대한 코트를 입으려고 노력하는 편입니다.', NULL),
        ('253cbed9-fe61-42c3-ba16-ff69a9c6187d', 12, '나는 잠깐 집 근처 외출을 할 때에도, 코디에 신경을 써서 꾸며 입으려고 하는 편입니다.', NULL),
        ('916b2dc8-9f3a-4f15-aec6-59559941f058', 13, '나는 옷이 얼마나 편한지 보다, 얼마나 멋을 살릴 수 있는지를 중시합니다.', NULL),
        ('87bb6ffb-8a2d-4433-989c-0946eda3bf78', 14, '나는 옷을 사고 싶다는 충동이 하루에...☆', NULL),
        ('8af57f3e-6e1e-499a-89bc-e3abf244cf99', 15, '나의 패션에서 어른스러움은 상당히 중요한 부분을 차지합니다.', NULL),
        ('d7a54686-304b-4999-8d5c-6ed8f1deb814', 16, '나는 오버사이즈의 옷 보다, 정사이즈의 옷을 선호합니다.', NULL),
        ('e68492e7-0ffe-4117-a925-775302dec7b7', 17, '나는 주로 바지를 입을 때, 허리 부분이 배꼽 위에 오도록 입습니다.', NULL),
        ('97a99554-c45a-4651-9262-e50bd4d6f1bd', 18, '나는 방금 앞의 문제를 보고 나의 배꼽 부분을 만졌습니다.', NULL),
        ('69b215af-e902-4656-9796-ea87aad1c787', 19, '나는 식사를 할 때 옷에 뭘 자주 묻히는 편이다.', NULL),
        ('ef3bc2ad-6223-4ce6-88c2-b2c98cfcfa05', 20, '나는 다양한 스타일을 시도하기보단, 스타일이 확고한 편입니다.', NULL),
        ('f5793ed0-af42-4d78-934f-5461f72a153c', 21, '나는 온라인 쇼핑몰 인기 순위에 있는 아이템들은 구매하지 않으려고 하는 편입니다. ', NULL),
        ('ffc7af31-5657-4326-bc20-9e45c841a171', 22, '코디할 때, 사람들이 따르는 유행보다 내가 좋아하는 스타일을 더 중요시합니다.', NULL),
        ('24f0e82b-d110-497f-978c-7b3c97127735', 23, '나는 패션 센스가 너무 뛰어나서 내가 제 2의 지드래곤이 될 수 있는 자질을 갖췄다고 생각합니다.', NULL),
        ('66ae5f36-54c7-4d6e-a101-4894d5c52d5c', 24, '나는 내 스타일의 아이템이라면, 유행이 지났더라도 거리낌 없이 구입할 수 있습니다.', NULL),
        ('4ad49bd7-bef8-4de6-86ef-c700e0a4d8e6', 25, '나는 대중들에게 잘 알려지지 않았음에도 비싼 브랜드의 아이템을 구매하는 것이 이해가 가지 않습니다.', NULL);

INSERT INTO 
    "fashion_test.answer"
        (question_id, sequence, text, value)
    VALUES
        ('d3803b0b-b63f-40a1-b0a6-59d3744156e1', 1, '매우 그런 편이다', '{"M":3}'),
        ('d3803b0b-b63f-40a1-b0a6-59d3744156e1', 2, '조금 그런 편이다', '{"M":1}'),
        ('d3803b0b-b63f-40a1-b0a6-59d3744156e1', 3, '조금 그렇지 않은 편이다', '{"C":1}'),
        ('d3803b0b-b63f-40a1-b0a6-59d3744156e1', 4, '매우 그렇지 않은 편이다', '{"C":3}'),
        ('6fba6a79-a796-4e0d-8abe-d2accbaf43e6', 1, '(1)을 매우 선호하는 편이다', '{"C":3}'),
        ('6fba6a79-a796-4e0d-8abe-d2accbaf43e6', 2, '(1)을 조금 선호하는 편이다', '{"C":1}'),
        ('6fba6a79-a796-4e0d-8abe-d2accbaf43e6', 3, '(2)를 조금 선호하는 편이다', '{"M":1}'),
        ('6fba6a79-a796-4e0d-8abe-d2accbaf43e6', 4, '(2)를 매우 선호하는 편이다', '{"M":3}'),
        ('3f367074-d450-4d8b-8487-6ba905b2d812', 1, '매우 그런 편이다', '{"S":3}'),
        ('3f367074-d450-4d8b-8487-6ba905b2d812', 2, '조금 그런 편이다', '{"S":1}'),
        ('3f367074-d450-4d8b-8487-6ba905b2d812', 3, '조금 그렇지 않은 편이다', '{"F":3}'),
        ('3f367074-d450-4d8b-8487-6ba905b2d812', 4, '매우 그렇지 않은 편이다', '{"F":1}'),
        ('9c94b561-cd13-4936-9ce0-f7c5b4dbd5b2', 1, '매우 그런 편이다', '{"F":3}'),
        ('9c94b561-cd13-4936-9ce0-f7c5b4dbd5b2', 2, '조금 그런 편이다', '{"F":1}'),
        ('9c94b561-cd13-4936-9ce0-f7c5b4dbd5b2', 3, '조금 그렇지 않은 편이다', '{"S":1}'),
        ('9c94b561-cd13-4936-9ce0-f7c5b4dbd5b2', 4, '매우 그렇지 않은 편이다', '{"S":3}'),
        ('dec438da-4bf7-4316-a375-b57f012e2e86', 1, '(1)을 선택할 확률이 매우 높다', '{"S":3}'),
        ('dec438da-4bf7-4316-a375-b57f012e2e86', 2, '(1)을 선택할 확률이 조금 높다', '{"S":1}'),
        ('dec438da-4bf7-4316-a375-b57f012e2e86', 3, '(2)을 선택할 확률이 조금 높다', '{"F":1}'),
        ('dec438da-4bf7-4316-a375-b57f012e2e86', 4, '(2)을 선택할 확률이 매우 높다', '{"F":3}'),
        ('685dcb48-39bc-4486-856a-6b86a331cf43', 1, '(1)을 매우 선호하는 편이다', '{}'),
        ('685dcb48-39bc-4486-856a-6b86a331cf43', 2, '(1)을 조금 선호하는 편이다', '{}'),
        ('685dcb48-39bc-4486-856a-6b86a331cf43', 3, '(2)를 조금 선호하는 편이다', '{}'),
        ('685dcb48-39bc-4486-856a-6b86a331cf43', 4, '(2)를 매우 선호하는 편이다', '{}'),
        ('b450ce53-e1f5-444c-b621-2fa7c7d7d905', 1, '해본 적 없다', '{"S":3}'),
        ('b450ce53-e1f5-444c-b621-2fa7c7d7d905', 2, '주 3회 정도 한다', '{"S":1}'),
        ('b450ce53-e1f5-444c-b621-2fa7c7d7d905', 3, '주 5회 이상 정도 한다', '{"F":1}'),
        ('b450ce53-e1f5-444c-b621-2fa7c7d7d905', 4, '매 순간 한다', '{"F":3}'),
        ('11a4c9c4-5c68-43ec-ab1b-21110f391212', 1, '매우 그런 편이다', '{"E":3}'),
        ('11a4c9c4-5c68-43ec-ab1b-21110f391212', 2, '조금 그런 편이다', '{"E":1}'),
        ('11a4c9c4-5c68-43ec-ab1b-21110f391212', 3, '조금 그렇지 않은 편이다', '{"O":1}'),
        ('11a4c9c4-5c68-43ec-ab1b-21110f391212', 4, '매우 그렇지 않은 편이다', '{"O":3}'),
        ('0a893169-f0ec-4916-abf6-2e948f60a31a', 1, '매우 그런 편이다', '{"F":3}'),
        ('0a893169-f0ec-4916-abf6-2e948f60a31a', 2, '조금 그런 편이다', '{"F":1}'),
        ('0a893169-f0ec-4916-abf6-2e948f60a31a', 3, '조금 그렇지 않은 편이다', '{"S":1}'),
        ('0a893169-f0ec-4916-abf6-2e948f60a31a', 4, '매우 그렇지 않은 편이다', '{"S":3}'),
        ('a1957a76-e4b8-4160-bbcb-c3918f7c71b5', 1, '매우 그런 편이다', '{"E":3}'),
        ('a1957a76-e4b8-4160-bbcb-c3918f7c71b5', 2, '조금 그런 편이다', '{"E":1}'),
        ('a1957a76-e4b8-4160-bbcb-c3918f7c71b5', 3, '조금 그렇지 않은 편이다', '{"O":1}'),
        ('a1957a76-e4b8-4160-bbcb-c3918f7c71b5', 4, '매우 그렇지 않은 편이다', '{"O":3}'),
        ('5fabf3ee-e5cd-44df-ab16-650194d58bc2', 1, '매우 그런 편이다', '{"E":3}'),
        ('5fabf3ee-e5cd-44df-ab16-650194d58bc2', 2, '조금 그런 편이다', '{"E":1}'),
        ('5fabf3ee-e5cd-44df-ab16-650194d58bc2', 3, '조금 그렇지 않은 편이다', '{"O":1}'),
        ('5fabf3ee-e5cd-44df-ab16-650194d58bc2', 4, '매우 그렇지 않은 편이다', '{"O":3}'),
        ('253cbed9-fe61-42c3-ba16-ff69a9c6187d', 1, '매우 그런 편이다', '{"E":3}'),
        ('253cbed9-fe61-42c3-ba16-ff69a9c6187d', 2, '조금 그런 편이다', '{"E":1}'),
        ('253cbed9-fe61-42c3-ba16-ff69a9c6187d', 3, '조금 그렇지 않은 편이다', '{"O":1}'),
        ('253cbed9-fe61-42c3-ba16-ff69a9c6187d', 4, '매우 그렇지 않은 편이다', '{"O":3}'),
        ('916b2dc8-9f3a-4f15-aec6-59559941f058', 1, '매우 그런 편이다', '{}'),
        ('916b2dc8-9f3a-4f15-aec6-59559941f058', 2, '조금 그런 편이다', '{}'),
        ('916b2dc8-9f3a-4f15-aec6-59559941f058', 3, '조금 그렇지 않은 편이다', '{}'),
        ('916b2dc8-9f3a-4f15-aec6-59559941f058', 4, '매우 그렇지 않은 편이다', '{}'),
        ('87bb6ffb-8a2d-4433-989c-0946eda3bf78', 1, '1~2번 정도 들까 말까 한다', '{"M":3}'),
        ('87bb6ffb-8a2d-4433-989c-0946eda3bf78', 2, '세 시간에 한 번씩 든다', '{"M":1}'),
        ('87bb6ffb-8a2d-4433-989c-0946eda3bf78', 3, '30분에 한 번씩 든다', '{"C":1}'),
        ('87bb6ffb-8a2d-4433-989c-0946eda3bf78', 4, '나는 옷에 미쳐있다...', '{"C":3}'),
        ('8af57f3e-6e1e-499a-89bc-e3abf244cf99', 1, '매우 그런 편이다', '{"M":3}'),
        ('8af57f3e-6e1e-499a-89bc-e3abf244cf99', 2, '조금 그런 편이다', '{"M":1}'),
        ('8af57f3e-6e1e-499a-89bc-e3abf244cf99', 3, '조금 그렇지 않은 편이다', '{"C":1}'),
        ('8af57f3e-6e1e-499a-89bc-e3abf244cf99', 4, '매우 그렇지 않은 편이다', '{"C":3}'),
        ('d7a54686-304b-4999-8d5c-6ed8f1deb814', 1, '매우 그런 편이다', '{"M":3}'),
        ('d7a54686-304b-4999-8d5c-6ed8f1deb814', 2, '조금 그런 편이다', '{"M":1}'),
        ('d7a54686-304b-4999-8d5c-6ed8f1deb814', 3, '조금 그렇지 않은 편이다', '{"C":1}'),
        ('d7a54686-304b-4999-8d5c-6ed8f1deb814', 4, '매우 그렇지 않은 편이다', '{"C":3}'),
        ('e68492e7-0ffe-4117-a925-775302dec7b7', 1, '매우 그런 편이다', '{"G":3}'),
        ('e68492e7-0ffe-4117-a925-775302dec7b7', 2, '조금 그런 편이다', '{"G":1}'),
        ('e68492e7-0ffe-4117-a925-775302dec7b7', 3, '조금 그렇지 않은 편이다', '{"D":1}'),
        ('e68492e7-0ffe-4117-a925-775302dec7b7', 4, '매우 그렇지 않은 편이다', '{"D":3}'),
        ('97a99554-c45a-4651-9262-e50bd4d6f1bd', 1, '예', '{}'),
        ('97a99554-c45a-4651-9262-e50bd4d6f1bd', 2, '아니오', '{}'),
        ('69b215af-e902-4656-9796-ea87aad1c787', 1, '그렇다. 식사를 할 때 흰 옷은 절대 못입는다', '{}'),
        ('69b215af-e902-4656-9796-ea87aad1c787', 2, '묻히면 좀 어떤가? 난 상관 없다', '{}'),
        ('69b215af-e902-4656-9796-ea87aad1c787', 3, '아니다. 난 성숙한 어른이라 절대 안묻힌다', '{}'),
        ('ef3bc2ad-6223-4ce6-88c2-b2c98cfcfa05', 1, '매우 그런 편이다', '{"G":3}'),
        ('ef3bc2ad-6223-4ce6-88c2-b2c98cfcfa05', 2, '조금 그런 편이다', '{"G":1}'),
        ('ef3bc2ad-6223-4ce6-88c2-b2c98cfcfa05', 3, '조금 그렇지 않은 편이다', '{"D":1}'),
        ('ef3bc2ad-6223-4ce6-88c2-b2c98cfcfa05', 4, '매우 그렇지 않은 편이다', '{"D":3}'),
        ('f5793ed0-af42-4d78-934f-5461f72a153c', 1, '매우 그런 편이다', '{"G":3}'),
        ('f5793ed0-af42-4d78-934f-5461f72a153c', 2, '조금 그런 편이다', '{"G":1}'),
        ('f5793ed0-af42-4d78-934f-5461f72a153c', 3, '조금 그렇지 않은 편이다', '{"D":1}'),
        ('f5793ed0-af42-4d78-934f-5461f72a153c', 4, '매우 그렇지 않은 편이다', '{"D":3}'),
        ('ffc7af31-5657-4326-bc20-9e45c841a171', 1, '매우 그런 편이다', '{"G":3}'),
        ('ffc7af31-5657-4326-bc20-9e45c841a171', 2, '조금 그런 편이다', '{"G":1}'),
        ('ffc7af31-5657-4326-bc20-9e45c841a171', 3, '조금 그렇지 않은 편이다', '{"D":1}'),
        ('ffc7af31-5657-4326-bc20-9e45c841a171', 4, '매우 그렇지 않은 편이다', '{"D":3}'),
        ('24f0e82b-d110-497f-978c-7b3c97127735', 1, '매우 그런 편이다', '{}'),
        ('24f0e82b-d110-497f-978c-7b3c97127735', 2, '조금 그런 편이다', '{}'),
        ('24f0e82b-d110-497f-978c-7b3c97127735', 3, '조금 그렇지 않은 편이다', '{}'),
        ('24f0e82b-d110-497f-978c-7b3c97127735', 4, '매우 그렇지 않은 편이다', '{}'),
        ('66ae5f36-54c7-4d6e-a101-4894d5c52d5c', 1, '매우 그런 편이다', '{"G":3}'),
        ('66ae5f36-54c7-4d6e-a101-4894d5c52d5c', 2, '조금 그런 편이다', '{"G":1}'),
        ('66ae5f36-54c7-4d6e-a101-4894d5c52d5c', 3, '조금 그렇지 않은 편이다', '{"D":1}'),
        ('66ae5f36-54c7-4d6e-a101-4894d5c52d5c', 4, '매우 그렇지 않은 편이다', '{"D":3}'),
        ('4ad49bd7-bef8-4de6-86ef-c700e0a4d8e6', 1, '매우 그런 편이다', '{"D":3}'),
        ('4ad49bd7-bef8-4de6-86ef-c700e0a4d8e6', 2, '조금 그런 편이다', '{"D":1}'),
        ('4ad49bd7-bef8-4de6-86ef-c700e0a4d8e6', 3, '조금 그렇지 않은 편이다', '{"G":1}'),
        ('4ad49bd7-bef8-4de6-86ef-c700e0a4d8e6', 4, '매우 그렇지 않은 편이다', '{"G":3}');