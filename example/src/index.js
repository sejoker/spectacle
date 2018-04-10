import React, { Component } from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from '../../src';

import CodeSlide from 'spectacle-code-slide';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/default';

import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  dashboard: require('../assets/dashboard.png'),
  puppeteer: require('../assets/puppeteer.png'),
  select_plan: require('../assets/select_plan.png'),
  dns_refactor: require('../assets/dns_refactor.png'),
  libraries: require('../assets/libraries.png'),
  network: require('../assets/network.png'),
  cloudflare: require('../assets/cloudflare.svg'),
  testing_pyramid: require('../assets/testing_pyramid.png')
};

preloader(images);

const theme = createTheme({
  primary: 'black',
  secondary: '#faf8f5',
  gold: '#FF7900'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="gold">
            End to End Testing
          </Heading>
          <Heading size={1} fit caps textColor="gold">
            with Puppeteer
          </Heading>
          <Heading size={1} fit caps textColor="white">
            Yevgen Safronov, Frontend Engineer @Cloudflare
          </Heading>
        </Slide>
        <Slide
          bgColor="white"
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
        >
          <Image
            src={images.libraries.replace('/', '')}
            margin="0px auto 40px"
          />
          <Heading size={2} fit textColor="primary" textFont="primary">
            Existing solutions for test automation
          </Heading>
        </Slide>
        <Slide
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: 'white'
              };
            }
          ]}
          bgColor="white"
        >
          <Image
            src={images.puppeteer.replace('/', '')}
            margin="0px auto 40px"
          />
          <Heading size={2} fit textColor="primary" textFont="primary">
            Node library for headless Chrome
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="white" textColor="black">
          <Layout>
            <Fill>
              <Image src={images.puppeteer.replace('/', '')} />
            </Fill>
            <Fill>
              <List>
                <Appear>
                  <ListItem>async/await, ES6 features</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Bundles with latest Chromium</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Node library on top of DevTools protocol </ListItem>
                </Appear>
                <Appear>
                  <ListItem>Officially support by DevTools team</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="secondary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Image src={images.puppeteer.replace('/', '')} width="10%" />
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
            fontSize="30px"
            overflow="overflow"
          />
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/screenshot.example')}
          ranges={[
            { loc: [0, 0], title: 'Take a screenshot' },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [5, 6] },
            { loc: [6, 7] },
            { loc: [7, 8] }
          ]}
        />
        <Slide>
          <Heading fit size={1} textColor="gold">
            E2E testing at Cloudflare
          </Heading>
        </Slide>
        <Slide
          transition={['spin', 'zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Layout>
            <Fill>
              <Heading caps fit size={1} textColor="primary">
                To help build a better Internet
              </Heading>
            </Fill>
            <Fill>
              <Image width="30%" src={images.cloudflare} />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Markdown style={{ color: 'black' }}>
                {`
  * Performance
  * Security
  * Reliability
  * Edge computing
            `}
              </Markdown>
            </Fill>
            <Fill>
              <Image src={images.network.replace('/', '')} />
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : 'black'
              };
            }
          ]}
        >
          <Heading size={2} fit textColor="gold" textFont="primary">
            How UI interacts with Backend services
          </Heading>
          <Image src={images.dashboard.replace('/', '')} margin="40px" />
        </Slide>
        <Slide
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `
              };
            }
          ]}
        >
          <Heading size={3} fit textColor="gold" textFont="primary">
            Use case: plan subscription bug
          </Heading>
          <Image
            src={images.select_plan.replace('/', '')}
            width="60%"
            padding="20px"
          />
          <Heading size={4} fit textColor="white" textFont="primary">
            Made a change to fix an error in Sentry logs
          </Heading>
        </Slide>
        <Slide
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `
              };
            }
          ]}
          bgColor="black"
        >
          <Heading size={3} fit textColor="gold" textFont="primary">
            Use case: DNS table refactoring
          </Heading>
          <Image
            src={images.dns_refactor.replace('/', '')}
            width="100%"
            padding="20px"
          />
          <Heading size={4} textColor="white" textFont="primary">
            Made a refactoring in DNS table
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="gold" textFont="primary">
            Caution: Testing pyramid
          </Heading>
          <Image
            src={images.testing_pyramid.replace('/', '')}
            width="60%"
            padding="20px"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <Heading size={3} textColor="gold" textFont="primary">
            Problem definition
          </Heading>

          <List>
            <Appear>
              <ListItem>Unit and integration testing is not enough</ListItem>
            </Appear>
            <Appear>
              <ListItem>Manual testing is not scalable</ListItem>
            </Appear>
            <Appear>
              <ListItem>Boost confidence to release often</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easy to write and run e2e tests</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading fit size={1} textColor="gold">
            Demo: Onboarding flow
          </Heading>
        </Slide>
        {/*
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        
        <Slide goTo={3}>
          <ComponentPlayground theme="dark" />
        </Slide>{' '}
        
        <Slide
          transition={['slide']}
          bgImage={images.city.replace('/', '')}
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        */}
        <Slide>
          <Heading size={2} textColor="secondary" margin="0.25em">
            Mix it up!
          </Heading>
          <Heading size={6} textColor="tertiary">
            You can even jump to different slides with a standard button or
            custom component!
          </Heading>
          <GoToAction margin="1em" slide={8}>
            Jump to Slide 8
          </GoToAction>
          <GoToAction
            render={goToSlide => (
              <select
                defaultValue=""
                style={{
                  background: '#000',
                  color: '#fff',
                  fontFamily: theme.print.fonts.primary,
                  fontSize: '1.1em'
                }}
                onChange={({ target }) => goToSlide(target.value)}
              >
                <option value="" disabled>
                  Custom Slide Picker
                </option>
                <option value="wait-what">Wait What!? Slide</option>
                <option value={3}>Slide 3</option>
              </select>
            )}
          />
        </Slide>
        <Slide
          transition={['slide']}
          bgDarken={0.75}
          getAppearStep={this.updateSteps}
        >
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="secondary">
              Count
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Steps
            </Heading>
          </Appear>
          <Heading size={1} caps fit textColor="secondary">
            Steps: {this.state.steps}
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            Flexible Layouts
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={['spin', 'zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
          </Markdown>
        </Slide>
        {MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <SlideSet>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <List>
              <Appear>
                <ListItem>Inline style based theme system</ListItem>
              </Appear>
              <Appear>
                <ListItem>Autofit text</ListItem>
              </Appear>
              <Appear>
                <ListItem>Flexbox layout system</ListItem>
              </Appear>
              <Appear>
                <ListItem>PDF export</ListItem>
              </Appear>
              <Appear>
                <ListItem>And...</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive />
          </Slide>
        </SlideSet>
        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="Hard to find cities without any pizza"
        >
          <Heading
            size={4}
            caps
            textColor="secondary"
            bgColor="white"
            margin={10}
          >
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem />
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem />
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidable.com">
            <Image width="100%" src={images.logo} />
          </Link>
        </Slide>
      </Deck>
    );
  }
}
