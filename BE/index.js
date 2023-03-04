const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  // 1. take username fr req.body
  const { username } = req.body;

  try {
    const r = await axios.put(
      // 2. get users fr chatengine if there are any, else create new ones
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      // 3. private key will allow to create or delete users
      { headers: { "private-key": "6d807eea-f338-407b-9fa8-1db38437aca8" } }
    );
    // 4. user's data is returned .....
    return res.status(r.status).json(r.data);
  } catch (e) {
    // 5. .... or an error is recvd
    return res.status(e.response.status).json(e.response.data);
  }

  // Private Key
  // 6d807eea-f338-407b-9fa8-1db38437aca8
  // return res.json({ username: username, secret: "mhs123..." });
});

app.listen(3001);

// 6. create new user (sammy) on request.rest; 'npm run start' on terminal first [user 'sammy' now exists]
