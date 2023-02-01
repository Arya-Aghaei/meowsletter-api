import request from "supertest";
import router from "../server";

describe("POST /newsletter", () => {
  describe("when passed nothing", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(router).post("/newsletter").send({});
      expect(response.status).toBe(400);
      expect(response.body.status).toBe("NOT_VALID");
      expect(response.body.invalidFields).toContain("email");
      expect(response.body.invalidFields).toContain("time");
    });
  });

  describe("when passed all the entries correctly", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(router).post("/newsletter").send({
        name: "arya",
        email: "arya@b.com",
        language: "de",
        time: "MM",
      });
      expect(response.status).toBe(200);
    });
  });

  describe("when passed all the entries correctly without language", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(router).post("/newsletter").send({
        name: "arya",
        email: "arya@b.com",
        time: "MM",
      });
      expect(response.status).toBe(200);
      expect(response.body.data.language).toBe("en-gb");
    });
  });

  describe("when passed all the entries correctly without name", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(router).post("/newsletter").send({
        email: "arya@gmail.com",
        language: "de",
        time: "MM",
      });
      expect(response.status).toBe(200);
    });
  });

  describe("when passed all the entries correctly without email", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(router).post("/newsletter").send({
        name: "arya",
        language: "de",
        time: "MM",
      });
      expect(response.status).toBe(400);
      expect(response.body.status).toBe("NOT_VALID");
      expect(response.body.invalidFields).toContain("email");
    });
  });

  describe("when passed incorrect email", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(router).post("/newsletter").send({
        name: "arya",
        email: "arya@b.c",
        language: "de",
        time: "MM",
      });
      expect(response.status).toBe(400);
      expect(response.body.status).toBe("NOT_VALID");
      expect(response.body.invalidFields).toContain("email");
    });
  });

  describe("when passed incorrect language", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(router).post("/newsletter").send({
        name: "arya",
        email: "arya@gmail.com",
        language: "af",
        time: "MM",
      });
      expect(response.status).toBe(400);
      expect(response.body.status).toBe("NOT_VALID");
      expect(response.body.invalidFields).toContain("language");
    });
  });

  describe("when passed incorrect time", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(router).post("/newsletter").send({
        name: "arya",
        email: "arya@gmail.com",
        language: "de",
        time: "MMS",
      });
      expect(response.status).toBe(400);
      expect(response.body.status).toBe("NOT_VALID");
      expect(response.body.invalidFields).toContain("time");
    });
  });
});
