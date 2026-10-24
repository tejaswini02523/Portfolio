import {
  Code2,
  Atom,
  Braces,
  Database,
  Heart,
  ShoppingBag,
  Star,
  Sparkles,
  Terminal,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function CodeWorkspace() {
  const reduced = useReducedMotion();
  return (
    <div
      className="workspace-scene"
      aria-label="Abstract developer workspace illustration"
    >
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <motion.div
        className="code-window"
        animate={reduced ? {} : { y: [0, -10, 0], rotate: [-3, -2, -3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="window-bar">
          <span className="traffic">
            <i />
            <i />
            <i />
          </span>
          <span>portfolio / developer.jsx</span>
          <Code2 size={15} />
        </div>
        <div className="editor">
          <div className="line-numbers">
            01
            <br />
            02
            <br />
            03
            <br />
            04
            <br />
            05
            <br />
            06
            <br />
            07
            <br />
            08
            <br />
            09
            <br />
            10
            <br />
            11
          </div>
          <pre>
            <code>
              <span className="syntax-purple">const</span> developer = {"{"}
              {"\n"} name: <span className="syntax-green">'Tejaswini'</span>,
              {"\n"} role:{" "}
              <span className="syntax-green">'Software Developer'</span>,{"\n"}{" "}
              passion: [{"\n"}{" "}
              <span className="syntax-green">'Creative interfaces'</span>,{"\n"}{" "}
              <span className="syntax-green">'Thoughtful experiences'</span>
              {"\n"} ],{"\n"} <span className="syntax-blue">build</span>: ()
              =&gt; {"{"}
              {"\n"} <span className="syntax-purple">return</span> ideas.
              <span className="syntax-blue">bringToLife</span>();{"\n"} {"}"}
              {"\n"}
              {"}"};
            </code>
          </pre>
        </div>
        <div className="editor-status">
          <span>
            <span className="tiny-dot" /> Ready to create
          </span>
          <span>JavaScript · UTF-8</span>
        </div>
      </motion.div>
      <div className="float-tech tech-react">
        <Atom />
        <span>React</span>
      </div>
      <div className="float-tech tech-js">
        <Braces />
        <span>JavaScript</span>
      </div>
      <div className="float-tech tech-db">
        <Database />
      </div>
      <div className="build-chip">
        <span className="tiny-dot" /> Bringing ideas to life{" "}
        <Sparkles size={14} />
      </div>
      <div className="scene-star star-a" />
      <div className="scene-star star-b" />
      <div className="scene-star star-c" />
    </div>
  );
}

export function ProjectArt({ theme }) {
  return (
    <div className={`project-art art-${theme}`} aria-hidden="true">
      {theme === "kids" && (
        <>
          <div className="art-grid" />
          <div className="mini-browser">
            <div className="mini-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="learning-title">
              A little curious.
              <br />
              <b>A lot to discover.</b>
            </div>
            <div className="learning-blocks">
              <span>Aa</span>
              <span>123</span>
              <span>
                <Star />
              </span>
            </div>
            <div className="mini-caption">LET'S LEARN SOMETHING NEW</div>
          </div>
          <Sparkles className="art-spark" size={35} />
        </>
      )}
      {theme === "galaxy" && (
        <>
          <div className="galaxy-orbit" />
          <div className="spin-wheel">
            <span>WIN</span>
            <Star size={30} />
            <span>SPIN</span>
          </div>
          <div className="spin-pointer" />
          <div className="galaxy-caption">A universe of rewards.</div>
        </>
      )}
      {theme === "dating" && (
        <>
          <div className="connection-ring" />
          <Heart className="large-heart" size={80} />
          <div className="connection-label">
            Good things
            <br />
            <b>start with a hello.</b>
          </div>
        </>
      )}
      {theme === "toolkit" && (
        <>
          <div className="shop-window">
            <ShoppingBag size={32} />
            <strong>
              Tools for your
              <br />
              next big idea.
            </strong>
            <div className="tool-boxes">
              <Code2 />
              <Terminal />
              <Braces />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
