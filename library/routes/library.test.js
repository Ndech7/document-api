import supertest from "supertest";
import server from "../../app.js";

const requestWithSupertest = supertest(server);

describe('GET "/"', () => {
  test('GET "/" returns all books', async () => {
    const res = await requestWithSupertest.get("/library");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual([
      {
        id: 1,
        name: "Eloquent JavaScript",
        author: "Marjin Haverbeke",
        description: "A Modern Introduction to Programming",
        edition: "3rd",
      },
      {
        id: 2,
        name: "PostGIS In Action",
        author: "Regina O. Obe",
        description: "An Introduction to PostGIS",
        edition: "3rd",
      },
      {
        id: 3,
        name: "Surveying",
        author: "Barry F.Kavanagh",
        description: "Principles and Applications",
        edition: "5th",
      },
    ]);
  });
});

describe('GET "/:id"', () => {
  test('GET "/" returns given book', async () => {
    const res = await requestWithSupertest.get("/library/1");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 1,
      name: "Eloquent JavaScript",
      author: "Marjin Haverbeke",
      description: "A Modern Introduction to Programming",
      edition: "3rd",
    });
  });
});

describe('PUT "/:id"', () => {
  test('PUT "/:id" update a book and returns it', async () => {
    const res = await requestWithSupertest.put("/library/1").send({
      id: 1,
      name: "Eloquent JavaScript",
      author: "Marjin Haverbeke",
      description: "A Modern Introduction to Programming",
      edition: "4th",
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 1,
      name: "Eloquent JavaScript",
      author: "Marjin Haverbeke",
      description: "A Modern Introduction to Programming",
      edition: "4th",
    });
  });
});

describe('POST "/"', () => {
  test('POST "/" add a book and returns it', async () => {
    const res = await requestWithSupertest.post("/library").send({
      name: "The 48 Laws of Power",
      author: "Robert Greene",
      description: "About the 48 laws of Power",
      edition: "1st",
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 4,
      name: "The 48 Laws of Power",
      author: "Robert Greene",
      description: "About the 48 laws of Power",
      edition: "1st",
    });
  });
});

describe('DELETE "/:id"', () => {
  test('DELETE "/:id" remove a given book and returns an updated list', async () => {
    const res = await requestWithSupertest.delete("/library/2");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual([
      {
        id: 1,
        name: "Eloquent JavaScript",
        author: "Marjin Haverbeke",
        description: "A Modern Introduction to Programming",
        edition: "4th",
      },
      {
        id: 3,
        name: "Surveying",
        author: "Barry F.Kavanagh",
        description: "Principles and Applications",
        edition: "5th",
      },
      {
        id: 4,
        name: "The 48 Laws of Power",
        author: "Robert Greene",
        description: "About the 48 laws of Power",
        edition: "1st",
      },
    ]);
  });
});
