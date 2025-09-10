// src/com/cubemovers/servlets/LoginServlet.java
package com.cubemovers.servlets;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        String idNumber = request.getParameter("idNumber");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/cube_movers_db", "root", "your_password");

            PreparedStatement ps = con.prepareStatement(
                "SELECT * FROM workers WHERE id_number = ?");
            ps.setString(1, idNumber);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                request.setAttribute("name", rs.getString("name"));
                request.setAttribute("job", rs.getString("assigned_job"));
                RequestDispatcher rd = request.getRequestDispatcher("dashboard.jsp");
                rd.forward(request, response);
            } else {
                response.sendRedirect("index.html");
            }

            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
