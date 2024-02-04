"use client";
import React from "react";

function Languages() {
  return (
    <div className="relative hidden dropdown language sm:block">
      <button
        className="btn border-0 py-0 dropdown-toggle px-3 h-[70px]"
        type="button"
        aria-expanded="false"
        data-dropdown-toggle="navNotifications"
      >
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z"
          alt=""
          className="h-4"
          id="header-lang-img"
        />
      </button>
      <div
        className="absolute z-50 hidden w-40 list-none bg-white rounded shadow dropdown-menu -left-24 dark:bg-zinc-800"
        id="navNotifications"
      >
        <ul
          className="border border-gray-50 dark:border-gray-700"
          aria-labelledby="navNotifications"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-zinc-600/50 dark:hover:text-white"
            >
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z"
                alt="user-image"
                className="inline-block h-3 mr-1"
              />{" "}
              <span className="align-middle">English</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-zinc-600/50 dark:hover:text-white"
            >
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAUIBgQBAv/EACkQAAIBAgQFBAMBAAAAAAAAAAECAwAEBQYREhUWVZTRExRRUiIxQXH/xAAaAQACAwEBAAAAAAAAAAAAAAAABgEDBwQC/8QAKREAAgEDAgUDBQEAAAAAAAAAAQIDAAQRIVQFEhMUkhWRkwYWNFNxgf/aAAwDAQACEQMRAD8AyzSSSMWZ2ZmbVmJJJJ/przc32aq04BgXRrDtk8V8PguW4Y5JrrDcNggiR3eR7eMKqqNST+NZfH9WxSukcdhKzuQqgMNSa2b1+ID8Z/epO3N9mo3N9mqlbC7yLiF/Lh8WHwRS+pshe5w4QpK2u3buK/idw0Aan/AMC6NYdsniui6+omsigueHSLzZ5SJFIOP5Xo8dVTyvZyqcA4bTQ/0VJe5vs1G5vs1VpwDAujWHbJ4o4BgXRrDtk8VyfeFvspPIVHr8W3f3qS9zfZq9WSSNgyuysraqwJBBH9FVnwDAujWHbJ4o4BgXRrDtk8UfeFvspPIUevRbZ/enFYLMM/D0ZbLD8QtPd3UbX07e3kUxsCm5VjaRwGAGm5K3tZWe1fFbO4w9cCTCgzBzcL6Tes4kDEuI2JJPyaW+ENbIl7JcdPRY+UO4U5LjUAnXFLkcqxTwBwSjNhsAkf7iluRsTytMbuC6ksPd2uIMDLd7bZxbFQFKkiMFtQdRWlshavcXN9Dhl5BLcNtmmlkt2icwnaoURO5BA+wFZmfIqJbotpiVuXnhMd0TAwOpZ9HTQjcdH0/KtLbPuugnLiWuxHT32sReZQw2hthLf5rTJxm74XcWkkNrFbo8VmoEglQu7FkY5xy5Oh0ql2w5m7h5WmkcEBHVUQEkDBNOKKKKQKsooooooqT+aMx9cv8AuH80c0Zj65f9w/mubEY40v75ERVVbiVVAGgAB/Qrl2r8Cto7S120PxrT6IoSAehH4LTPmjMfXL/uH80c0Zj65f8AcP5pZtX4FG1fgUdpa7aH41qejD+mPwWmfNGY+uX/AHD+aOaMx9cv+4fzSzavwKNq/Ao7S120PxrR0Yf0x+C0z5ozH1y/7h/NHNGY+uX/AHD+aWbV+BXVh0cb39ijorK1xErAjUEE/o0dna7aH41qDFCBnoR+C1//2Q=="
                alt="user-image"
                className="inline-block h-3 mr-1"
              />{" "}
              <span className="align-middle">Spanish</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-zinc-600/50 dark:hover:text-white"
            >
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcCBQH/xAAlEAABAgILAQEAAAAAAAAAAAABAAIDUQUREhYXVFWjpNLiITL/xAAYAQEBAQEBAAAAAAAAAAAAAAAABwEDBf/EACURAAACCQUBAQAAAAAAAAAAAAABAgMEBREVVKPRFBZVkpTSUf/aAAwDAQACEQMRAD8AiL4sWI98SJFe57nEucSSST9JJK8tOmV3bs03kdyH2S7NN5Hch9l31bLVKe5D1JA/eEb/ADLMDhWnTKWnTK7t2abyO5D7Jdmm8juQ+yaxlqlPcgkD94Rv8yzA4Vp0ylp0yu7dmm8juQ+yXZpvI7kPsmsZapT3IJA/eEb/ADLMDhWnTK9ZFiw3siQ4r2va4FrgSCCPoIIXcuzTeR3IfZLs03kdyH2TVstUp7kEgfvCN/mWYFWRVjC8a5xfaYXjXOL7UunzqqraeBft0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkVpFt/wC3iRSoSU5SRgZlER+Iwi3UJJUJLIBEYRbqEkqEkgERhFuoSRn7YJlaSMTIv0wiP//Z"
                alt="user-image"
                className="inline-block h-3 mr-1"
              />{" "}
              <span className="align-middle">German</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-zinc-600/50 dark:hover:text-white"
            >
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAgCBwEDBAX/xAAjEAACAQMEAgMBAAAAAAAAAAABAgADBzYEEXSxUbISIUQW/8QAFwEBAQEBAAAAAAAAAAAAAAAABwYFCP/EACcRAAIAAgkEAwAAAAAAAAAAAAABAgMEBQYHETM0dII1NrHBEiEx/9oADAMBAAIRAxEAPwD1mdmYu7sWLbkk7kkyO58yMJzKT5ZtqSf6at9/gre6xi4ulqcmrcCr7rGLjRYXoS3Ez0atDyeTCLPdnKl+/wAVLtozEWa7OVrwqPbShrPTc4RGu77he1m+UVlufMyrupDK5UqdwQdiCJiEnh2aT+mjuhCEFzi4s21OTVuBV91jFxdLU5NW4FX3WMXGiwnQluJno1aFk8mEWa7OVrwqPbRmYs12crXhUe2lDWem5wiNd33C9rN8orKEISeHc7oT0NaiJrdWiIFUVXAAGwABmj4r4EGYocG1icWliWpyatwKvusYuLvazJq3Cq+yxiozWF6EtxM9GrQsnkyMWa7OVrwqPbRm4tF18qXhUu2lDWem5wiNd33A9rN8oq6E27DxOnRIj63So6AqatMEEbg7mTw6RR/GFvD8WJ//2Q=="
                alt="user-image"
                className="inline-block h-3 mr-1"
              />{" "}
              <span className="align-middle">Italian</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Languages;
