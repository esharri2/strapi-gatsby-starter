import React from "react";
import { graphql } from "gatsby";

import Back from "../components/back";
import BackToTop from "../components/back-to-top";
import ButtonLinkStyle from "../components/button-link-style";
import Button from "../components/button";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";
import FormField from "../components/form-field";
import Header from "../components/header";
import Heading from "../components/heading";
import List from "../components/list";
import ListItem from "../components/list-item";
import Main from "../components/main";
import Spinner from "../components/spinner";
import Paragraph from "../components/paragraph";

const Index = ({ data }) => {
  return (
    <div>
      <Header />
      <Main hasFixedHeader={true}>
        <Back />

        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <List>
          <ListItem>List item 1</ListItem>
          <ListItem>List item 2</ListItem>
          <ListItem>List item 3</ListItem>
        </List>
        <Button>Button</Button>
        <ButtonLinkStyle>Button link style</ButtonLinkStyle>
        <Spinner />
        <FormField
          id="name"
          placeholder="Name"
          label="Your name"
          type="text"
          value="hi"
        />
        <Heading level={1}>Contact Form</Heading>
        <ContactForm />
        <Paragraph>
          Fugiat ullamco esse pariatur sunt laboris non consectetur Lorem
          exercitation cupidatat do Lorem ad. Culpa sit deserunt nostrud id
          excepteur excepteur sit in in nulla nisi non. Exercitation non officia
          commodo sit laboris eu adipisicing et deserunt in consectetur.
          Consequat occaecat nulla officia velit sint ad duis eiusmod aliquip
          irure id ut. Est proident laboris sit occaecat aute aliquip. Laborum
          aliqua excepteur irure incididunt voluptate veniam Lorem consectetur
          est ipsum labore officia aute esse. Ullamco dolore laboris
          exercitation cillum et in laboris.
        </Paragraph>
        <Paragraph>
          Irure do tempor ullamco amet pariatur sint minim nulla consequat
          veniam culpa sint. Tempor dolore amet amet nostrud cillum commodo
          officia elit commodo culpa nisi id cupidatat. Excepteur qui ut sit
          dolor excepteur magna sint tempor ea. Aliquip non ea velit sunt
          laboris mollit in ad aute aliquip irure enim.
        </Paragraph>
        <Paragraph>
          Fugiat ullamco esse pariatur sunt laboris non consectetur Lorem
          exercitation cupidatat do Lorem ad. Culpa sit deserunt nostrud id
          excepteur excepteur sit in in nulla nisi non. Exercitation non officia
          commodo sit laboris eu adipisicing et deserunt in consectetur.
          Consequat occaecat nulla officia velit sint ad duis eiusmod aliquip
          irure id ut. Est proident laboris sit occaecat aute aliquip. Laborum
          aliqua excepteur irure incididunt voluptate veniam Lorem consectetur
          est ipsum labore officia aute esse. Ullamco dolore laboris
          exercitation cillum et in laboris.
        </Paragraph>
        <Paragraph>
          Irure do tempor ullamco amet pariatur sint minim nulla consequat
          veniam culpa sint. Tempor dolore amet amet nostrud cillum commodo
          officia elit commodo culpa nisi id cupidatat. Excepteur qui ut sit
          dolor excepteur magna sint tempor ea. Aliquip non ea velit sunt
          laboris mollit in ad aute aliquip irure enim.
        </Paragraph>
        <Paragraph>
          Fugiat ullamco esse pariatur sunt laboris non consectetur Lorem
          exercitation cupidatat do Lorem ad. Culpa sit deserunt nostrud id
          excepteur excepteur sit in in nulla nisi non. Exercitation non officia
          commodo sit laboris eu adipisicing et deserunt in consectetur.
          Consequat occaecat nulla officia velit sint ad duis eiusmod aliquip
          irure id ut. Est proident laboris sit occaecat aute aliquip. Laborum
          aliqua excepteur irure incididunt voluptate veniam Lorem consectetur
          est ipsum labore officia aute esse. Ullamco dolore laboris
          exercitation cillum et in laboris.
        </Paragraph>
        <Paragraph>
          Irure do tempor ullamco amet pariatur sint minim nulla consequat
          veniam culpa sint. Tempor dolore amet amet nostrud cillum commodo
          officia elit commodo culpa nisi id cupidatat. Excepteur qui ut sit
          dolor excepteur magna sint tempor ea. Aliquip non ea velit sunt
          laboris mollit in ad aute aliquip irure enim.
        </Paragraph>
      </Main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Index;

export const query = graphql`
  query {
    allStrapiRestaurant {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;
