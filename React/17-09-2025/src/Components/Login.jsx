import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <Form className="space-y-4 px-2">
      {/* Email */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="text-gray-600 font-medium">Email</Form.Label>
        <div className="flex items-center border border-gray-300 rounded-md px-3">
          <FaUser className="text-gray-400 mr-2" />
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="border-0 focus:ring-0 focus:outline-none"
          />
        </div>
      </Form.Group>

      {/* Password */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="text-gray-600 font-medium">Password</Form.Label>
        <div className="flex items-center border border-gray-300 rounded-md px-3">
          <FaLock className="text-gray-400 mr-2" />
          <Form.Control
            type="password"
            placeholder="Enter password"
            className="border-0 focus:ring-0 focus:outline-none"
          />
        </div>
      </Form.Group>

      {/* Remember Me + Forgot Password */}
      <div className="flex justify-between items-center mt-2">
        <Form.Check
          type="checkbox"
          label="Remember me"
          className="text-gray-600"
        />
        <a
          href="#"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <div className="mt-4">
        <Button
          variant="primary"
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold shadow"
        >
          Login
        </Button>
      </div>
    </Form>
  );
}

export default Login;
