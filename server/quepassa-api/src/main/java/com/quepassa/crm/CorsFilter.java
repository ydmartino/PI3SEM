// import org.springframework.stereotype.Component;

// import jakarta.servlet.http.HttpServlet;
// import javax.servlet.Filter;
// import javax.servlet.FilterChain;
// import javax.servlet.ServletException;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;

// public class CorsFilter implements Filter {

//     @Override
//     public void doFilter(javax.servlet.ServletRequest request, javax.servlet.ServletResponse response, FilterChain chain) throws IOException, ServletException {

//         HttpServletResponse httpResponse = (HttpServletResponse) response;
//         HttpServletRequest httpRequest = (HttpServletRequest) request;

//         httpResponse.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//         httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//         httpResponse.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
//         httpResponse.setHeader("Access-Control-Expose-Headers", "Authorization");
//         httpResponse.setHeader("Access-Control-Allow-Credentials", "true");

//         if ("OPTIONS".equalsIgnoreCase(httpRequest.getMethod())) {
//             httpResponse.setStatus(HttpServletResponse.SC_OK);
//         } else {
//             chain.doFilter(request, response);
//         }
//     }
// }
