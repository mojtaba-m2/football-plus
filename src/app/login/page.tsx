"use client";

import Container from "@/components/Container";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setUserName("");
    setPassword("");

    const response = {
      token: "abcdefghijklmnopqrstuvwxyz",
      expire: 7,
    };

    Cookies.set("token", response.token, { expires: response.expire });
    redirect("/predictions");
  };

  return (
    <div>
      <Container>
        <div className="w-72 border p-4 m-auto flex flex-col items-center ">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            className="border px-2 py-1 mb-3"
            type="text"
            placeholder="نام کاربری"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="border px-2 py-1 mb-3"
            type="password"
            placeholder="رمز ورود"
          />

          <button
            onClick={handleLogin}
            className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer"
          >
            ورود
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
