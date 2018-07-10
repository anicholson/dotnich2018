import { h, Component } from 'preact';
import { Page } from './Page';
import { H1, P } from '../typography';


const Bio = () => (
  <Page>
    <H1>pr&eacute;cis</H1>

    <P>Hi! I&rsquo;m a 30-year-old software developer from Melbourne, Australia. Please call me Andy :)</P>

    <P>Here&apos;s what you need to know about me:</P>

    <ul>
      <li>
        <P>I have been interested in technology since childhood (first an IBM XT, then a 386!), and people since becoming an adult.</P>
      </li>
      <li>
        <P>
          I pick up new languages, concepts, and technologies quickly. My career so far has called on me to learn and use PHP, Python, and even a smattering of C++!  Right now I mostly write code in <a href="http://marcodi.com/">Ruby</a>, Javascript, <a href="http://crystal-lang.org/">Crystal</a> &amp; <a href="http://elm-lang.org/">Elm</a>.
  </P>
      </li>
      <li><P>I&rsquo;m warm and friendly, and easy to work with.</P></li>
      <li><P>I want to really understand the problem I&rsquo;m trying to solve - how else can I discover the best solution?</P></li>
      <li><P>I&rsquo;m known for taking an idea and picking it to pieces. I have a knack for asking the right questions, and then finding the right answers.</P></li>
      <li><P>I&rsquo;ve <a href="http://au.linkedin.com/in/anicholson/">worked for</a> startups, small companies, larger software houses, and in the service industry.</P></li>
      <li><P>I believe in good UX, elegant design, and clean, well-written code. I believe that I am a <em><a href="http://blog.kickin-the-darkness.com/2007/09/confessions-of-terrible-programmer.html">Terrible Programmer</a></em>, and this helps me critique what I build.</P></li>
      <li><P>When I&rsquo;m not working, I enjoy poking around old record shops, or tackling the cryptic crossword in the newspaper with my wife. I love food and drink that&rsquo;s made with care - but beer and coffee are my true loves, beveragely-speaking.</P></li>
      <li><P>I grew up in Brisbane, when good coffee was &ldquo;Nescafe Gold&rdquo; and international cuisine was from the Chinese Takeaway down the road. It&rsquo;s a different city now, but I don&rsquo;t regret moving to Melbourne with my family in 2003.</P></li>
      <li><P>I play piano, harmonica, and am teaching myself to play <a href="http://marcodi.com/">this strange contraption</a>!</P></li>
      </ul>

      </Page>

      );

export default Bio;
