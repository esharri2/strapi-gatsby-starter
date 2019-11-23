/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { get, upperFirst } from "lodash";
import { auth } from "strapi-helper-plugin";
import PageTitle from "../../components/PageTitle";

import useFetch from "./hooks";
import {
  ALink,
  Block,
  Container,
  LinkWrapper,
  P,
  Wave,
  Separator
} from "./components";
import BlogPost from "./BlogPost";
import SocialLink from "./SocialLink";

const config = {
  buildHook: "<Add your Netlify build hook here.>"
};

const FIRST_BLOCK_LINKS = [
  {
    link:
      "https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html#_4-create-a-new-content-type",
    contentId: "app.components.BlockLink.documentation.content",
    titleId: "app.components.BlockLink.documentation"
  },
  {
    link: "https://github.com/strapi/foodadvisor",
    contentId: "app.components.BlockLink.code.content",
    titleId: "app.components.BlockLink.code"
  }
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/strapi/strapi/"
  },
  {
    name: "Slack",
    link: "https://slack.strapi.io/"
  },
  {
    name: "Medium",
    link: "https://medium.com/@strapi"
  },
  {
    name: "Twitter",
    link: "https://twitter.com/strapijs"
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/r/Strapi/"
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/questions/tagged/strapi"
  }
];

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const { error, isLoading, posts } = useFetch();
  const [isSucessfulPublish, setIsSuccessfulPublish] = useState(null);

  const publishContent = async () => {
    try {
      const response = await fetch(config.buildHook, { method: "POST" });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      setIsSuccessfulPublish(true);
    } catch (error) {
      setIsSuccessfulPublish(false);
    }
  };

  const handleClick = e => {
    e.preventDefault();

    push(
      "/plugins/content-type-builder/models/user&source=users-permissions?modalType=model&settingType=base&actionType=create"
    );
  };
  const hasAlreadyCreatedContentTypes =
    get(
      plugins,
      ["content-manager", "leftMenuSections", "0", "links"],
      []
    ).filter(contentType => contentType.isDisplayed === true).length > 1;

  const headerId = hasAlreadyCreatedContentTypes
    ? "HomePage.greetings"
    : "app.components.HomePage.welcome";
  const username = get(auth.getUserInfo(), "username", "");
  const linkProps = hasAlreadyCreatedContentTypes
    ? {
        id: "app.components.HomePage.button.blog",
        href: "https://blog.strapi.io/",
        onClick: () => {},
        type: "blog",
        target: "_blank"
      }
    : {
        id: "app.components.HomePage.create",
        href: "",
        onClick: handleClick,
        type: "documentation"
      };

  return (
    <Container className="container-fluid">
      <h1>Your Content Admin Panel</h1>
      <br />
      <Block>
        <p>
          This is your admin panel! Use it to update content on your website.
        </p>
        <p>
          Select a content type on the left to add, edit, or remove that type of
          content.
        </p>
        <p>Don't forget to save your changes.</p>
      </Block>
      <br />
      <Block>
        <h2>Publish your content</h2>
        <br />

        <p>
          When you edit content in this admin panel, it won't automatically
          change on your website.
        </p>
        <p>
          Click the button below to publish your content once you are done
          making updates.
        </p>
        <button
          style={{
            backgroundColor: "orange",
            fontSize: "16px",
            padding: "7px",
            borderRadius: "5px"
          }}
          onClick={publishContent}>
          Publish now
        </button>
        <br />

        <p>
          {isSucessfulPublish === true &&
            "Your content has started publishing. Check your site in 5 minutes to see your updates."}
          {isSucessfulPublish === false &&
            "Whoops! Something didn't work right."}
        </p>
      </Block>
    </Container>

    // Default strapi stuff ...

    // <>
    //   <FormattedMessage id="HomePage.helmet.title">
    //     {title => <PageTitle title={title} />}
    //   </FormattedMessage>
    //   <Container className="container-fluid">
    //     <div className="row">
    //       <div className="col-lg-8 col-md-12">
    //         <Block>
    //           <Wave />
    //           <FormattedMessage
    //             id={headerId}
    //             values={{
    //               name: upperFirst(username),
    //             }}
    //           >
    //             {msg => <h2 id="mainHeader">{msg}</h2>}
    //           </FormattedMessage>
    //           {hasAlreadyCreatedContentTypes ? (
    //             <FormattedMessage id="app.components.HomePage.welcomeBlock.content.again">
    //               {msg => <P>{msg}</P>}
    //             </FormattedMessage>
    //           ) : (
    //             <FormattedMessage id="HomePage.welcome.congrats">
    //               {congrats => {
    //                 return (
    //                   <FormattedMessage id="HomePage.welcome.congrats.content">
    //                     {content => {
    //                       return (
    //                         <FormattedMessage id="HomePage.welcome.congrats.content.bold">
    //                           {boldContent => {
    //                             return (
    //                               <P>
    //                                 <b>{congrats}</b>&nbsp;
    //                                 {content} &nbsp;
    //                                 <b>{boldContent}</b>
    //                               </P>
    //                             );
    //                           }}
    //                         </FormattedMessage>
    //                       );
    //                     }}
    //                   </FormattedMessage>
    //                 );
    //               }}
    //             </FormattedMessage>
    //           )}
    //           {hasAlreadyCreatedContentTypes && (
    //             <div style={{ marginTop: isLoading ? 60 : 50 }}>
    //               {posts.map((post, index) => (
    //                 <BlogPost
    //                   {...post}
    //                   key={post.link}
    //                   isFirst={index === 0}
    //                   isLoading={isLoading}
    //                   error={error}
    //                 />
    //               ))}
    //             </div>
    //           )}
    //           <FormattedMessage id={linkProps.id}>
    //             {msg => (
    //               <ALink
    //                 rel="noopener noreferrer"
    //                 {...linkProps}
    //                 style={{ verticalAlign: ' bottom', marginBottom: 5 }}
    //               >
    //                 {msg}
    //               </ALink>
    //             )}
    //           </FormattedMessage>
    //           <Separator style={{ marginTop: 37, marginBottom: 36 }} />
    //           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    //             {FIRST_BLOCK_LINKS.map((data, index) => {
    //               const type = index === 0 ? 'doc' : 'code';

    //               return (
    //                 <LinkWrapper
    //                   href={data.link}
    //                   target="_blank"
    //                   key={data.link}
    //                   type={type}
    //                 >
    //                   <FormattedMessage id={data.titleId}>
    //                     {title => <p className="bold">{title}</p>}
    //                   </FormattedMessage>
    //                   <FormattedMessage id={data.contentId}>
    //                     {content => <p>{content}</p>}
    //                   </FormattedMessage>
    //                 </LinkWrapper>
    //               );
    //             })}
    //           </div>
    //         </Block>
    //       </div>

    //       <div className="col-4">
    //         <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
    //           <FormattedMessage id="HomePage.community">
    //             {msg => <h2>{msg}</h2>}
    //           </FormattedMessage>
    //           <FormattedMessage id="app.components.HomePage.community.content">
    //             {content => (
    //               <P style={{ marginTop: 7, marginBottom: 0 }}>{content}</P>
    //             )}
    //           </FormattedMessage>
    //           <FormattedMessage id="HomePage.roadmap">
    //             {msg => (
    //               <ALink
    //                 rel="noopener noreferrer"
    //                 href="https://portal.productboard.com/strapi/1-public-roadmap/tabs/2-under-consideration"
    //                 target="_blank"
    //               >
    //                 {msg}
    //               </ALink>
    //             )}
    //           </FormattedMessage>

    //           <Separator style={{ marginTop: 18 }} />
    //           <div
    //             className="row social-wrapper"
    //             style={{
    //               display: 'flex',
    //               margin: 0,
    //               marginTop: 36,
    //               marginLeft: -15,
    //             }}
    //           >
    //             {SOCIAL_LINKS.map((value, key) => (
    //               <SocialLink key={key} {...value} />
    //             ))}
    //           </div>
    //         </Block>
    //       </div>
    //     </div>
    //   </Container>
    // </>
  );
};

export default memo(HomePage);
