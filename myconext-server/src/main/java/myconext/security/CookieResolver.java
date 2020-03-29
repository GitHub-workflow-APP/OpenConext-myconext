package myconext.security;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Optional;
import java.util.stream.Stream;

public class CookieResolver {

    public static Optional<Cookie> cookieByName(HttpServletRequest request, String cookieName) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            return Stream.of(cookies).filter(cookie -> cookie.getName().equals(cookieName)).findAny();
        }
        return Optional.empty();
    }

}
