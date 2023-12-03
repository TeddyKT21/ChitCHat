import { NextFunction, Request } from "express-serve-static-core";
import { login } from "../../controllers/auth.js";
import { Response } from "express";
import { expect,describe,it,vi } from "vitest";
describe("login in a user", () => {
  it("should fail if wrong email or password", () => {
    const next = vi.fn((thing:any) =>{});
    login(
      { body: { email: "aaa", password: "aaa" } } as Request,
      { send: () => {} } as Response,
      next as NextFunction
    );
    expect(next).toHaveBeenCalled();
  });
  it("should pass as eamil & password correct", () => {
    const send = vi.fn((thing:any) =>{});
    const next = vi.fn((thing:any) =>{});
    login(
      { body: { email: "aaa", password: "aaa" } }as Request,
      { send } as unknown as Response,
      next as NextFunction
    );
    expect(send).toHaveBeenCalled(); 
  });
});
