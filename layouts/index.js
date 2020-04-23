import React from 'react';

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    return <div>{content}</div>;
  };
}
