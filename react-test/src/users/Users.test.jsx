import { render, screen, fireEvent } from "@testing-library/react";
import Users from "./Users";
import { default as axios } from "axios";
jest.mock(axios);

describe("USER TEST", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  test("render users", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("users-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });
});
