import React from "react";
import { graphql } from "gatsby";

import Back from "../components/back";
import ButtonLinkStyle from "../components/button-link-style";
import Button from "../components/button";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";
import FormField from "../components/form-field";
import Header from "../components/header";
import Heading from "../components/heading";
import Main from "../components/main";

import SEO from "../components/seo";
import Paragraph from "../components/paragraph";

const Index = ({ data }) => {
  return (
    <div>
      <Header />
      <Back />
      <Main>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Button>Button</Button>
        <ButtonLinkStyle>Button link style</ButtonLinkStyle>
        <FormField
          id="name"
          placeholder="Name"
          label="Your name"
          type="text"
          value="hi"
        />
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
          Aliqua reprehenderit nulla sunt ea ipsum Lorem non nostrud consequat
          est nostrud. Qui fugiat quis dolor id ullamco proident eiusmod. Ipsum
          irure occaecat enim velit magna. Ullamco irure incididunt deserunt
          cupidatat officia ad mollit.
        </Paragraph>
        <Heading level={1}>Contact Form</Heading>
        <ContactForm />
      </Main>
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
