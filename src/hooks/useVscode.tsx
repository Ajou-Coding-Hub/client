import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";

function useVscode(joinRoom: string) {
  const [data, setData] = useState({
    code: "",
    filename: "",
  });

  useEffect(() => {
    const socket = io("ws://localhost:3000/vscode", {
      transports: ["websocket"],
    });
    console.log(socket);
    socket.on("connect", () => {
      console.log("connect");
      socket.emit("join", joinRoom);
    });

    socket.on("reciveCode", (data) => {
      setData(data);
      console.log(data);
    });

    return () => {
      socket?.close();
    };
  }, []);

  const expectFileName = useCallback(
    (filename: string) => {
      const lastPath = data.filename.split("/").at(-1);
      return lastPath === filename;
    },
    [data]
  );

  const expectCode = useCallback(
    (command: string) => {
      const transCommand = command
        .toLowerCase()
        .replaceAll("'", '"')
        .replaceAll(" ", "")
        .replaceAll("\n", "");

      const transCode = data.code
        .toLowerCase()
        .replaceAll("'", '"')
        .replaceAll(" ", "")
        .replaceAll("\n", "");

      return transCode.includes(transCommand);
    },
    [data]
  );

  return {
    expectFileName,
    expectCode,
    data,
  };
}

export default useVscode;
