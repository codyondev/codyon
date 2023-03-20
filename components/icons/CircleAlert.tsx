import React, { HTMLAttributes, memo } from 'react';

function CircleAlert({ ...rest }: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <rect width="15" height="15" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_941_3763" transform="scale(0.0333333)" />
        </pattern>
        <image
          id="image0_941_3763"
          width="30"
          height="30"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANfSURBVHgBxVe/SyNBFH67iWKhsLFTQXJaWFhcQAUVRRstrO4/SA4s7JJD/NFd7IIKt5ZXmbRWYnWnTcRfaYQEtLBQtlFLcyAYxB/3vueOrJ7ubnJGP3jOjDuZb9/Mm/e+1cgHEomEEQwGI5qmfeHhEFuYzbAfF9nybAV+np2fn1/1s6bmRVhbWxu/v79POIi8YPELpK+vrzOmaVpULvHU1FScm6QibG9vp7a2NmlDoZAYUCqV6OzsjE5PT2l/f1/66gXY5hYWFtK+iaenp3/YXgrRyMiIkPrByckJbWxs0PHx8QOBppm8/d88iWdmZpbv7u5idXV1NDo6SgMDA1QJtre3aX19XXaEkWbPvzqfB5wD29MJbOP4+Dh1dnZSpWhtbaWOjg46OjoCeYQdMHZ2dn7/Q8xnGuMmBU9B2tzcTP+LhoYGOap8Pk83Nze9TP6HyXOPxBy94UAgsMxdY2xszNPTlZUVymQycpYXFxeu80FeU1MjnjN6+fh+ZrPZko4RX5koN2EEULlnqqLbDVgTnjOMy8tLCVoh5nONoUUwvRXZc+BmABzl8WQyaeiTk5PIRuGmpibfV6YSqBxAD15H4PEwRj09PVRtKMeQenXGZwzeIoq9YHsMDMHjyHsRO2IjDGLJxbi/FSxQVqA55ho6fRBAjHoqiaDauLq6Ut0iiK33Ij4/P5eW80Ze50q0iYEqY9UEajbA16kQ5D+QKnEQq+zihe7ubrFyAaFgE2d1rhrQS0UUcJhfHB4eivkF1rbViQVdprMuKvKeL+E/KNx+sLa2JtVJVSg/UPOYK4NWrhN7bZLtNZSDF1SQAAcHB57zt7a2VAxZrFbTj8S213PqzRyC7UU46+/g4KDrXKzl2JW5VCplofNEc3GlMjl3x5FhotGoaxq1tZRrxgMpjsO+qkusuxLq2RPNtbe396u/v/8TNFKhUBDlAO30EnjLxF4DthdKhUugnOvi4uKE83ng+Q92d3dX+/r6Qre3t72QKzibxsZG3zkZcQLCXC6H2BFPn5MCboI+xs13evhckW3v6uqilpYW6astxjbC8IIgdSQiiRsmNV9a3/UTZnZ2NsxvHeMLL5qM/EGuZ319vckSp/jaJI18AhKJA2+YuxAOqOHOjzaLbZMJV5kw70ao8Bco2IYoDKWGgAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}

export default CircleAlert;
