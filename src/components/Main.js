import React from "react"
import Card from "./Card"
import Graph from "./Graph"
import Upload from "./Upload"
import Earning from "./Earning"
import { Account } from "./Account"
import { Ads } from "./Ads";

import { FcLike, FcConferenceCall } from "react-icons/fc";
import { FaCaretUp, FaCaretDown, FaRegBell } from "react-icons/fa";
import { MdFollowTheSigns } from "react-icons/md";

export default function Main() {
  return (
    <section className="content-page row-grid">
      <main className="content-main">
        <section className="cards row-grid mb-2">
          <Card
            icon={<FcConferenceCall className="icon-followers" />}
            sIcon={<FaCaretUp className="icon-clue" />}
            color="hsl(55, 137%, 86%)"
            title="Followers"
            sbgc="rgba(179, 255, 204, 0.54)"
            sfc="rgb(0, 231, 22)"
          />
          <Card
            icon={<FcLike className="icon-likes" />}
            sIcon={<FaCaretDown className="icon-clue" />}
            color="hsl(345, 97%, 86%)"
            title="Likes"
            sbgc="rgb(254, 185, 202)"
            sfc="red"
          />
          <Card
            icon={<MdFollowTheSigns className="icon-reach" />}
            sIcon={<FaCaretUp className="icon-clue" />}
            color="hsl(207, 51%, 95%)"
            title="Reach"
            sbgc="rgba(179, 255, 204, 0.54)"
            sfc="rgb(0, 231, 22)"
          />
        </section>
        <section className="row-grid mb-2">
          <Graph />
        </section>
        <section className="row-grid">
          <Upload />
          <Earning />
        </section>
      </main>
      <aside className="content-aside">
        <Account />
        <Ads />
      </aside>
    </section>
  );
}
