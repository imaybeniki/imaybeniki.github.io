import React from 'react';
import ShortContent from '../../molecules/content/VideoContent';
import JournalContent from '../../molecules/content/JournalContent';
import Content from '../../molecules/content/Content';
import * as contentOperations from '../../content/contentOperations';

/**
 * @summary Renders an array of Content boxes from an array of JSON objects
 * @property {array} contentList: a groomed array of content to be rendered
 * @property {string} title: 
 */
export default function ContentContainer(props){
  const contentList = contentOperations.getContentList();

  return contentList.map((content) => {
        if (content.type === 'short'){
            return <ShortContent title={content.title} body={content.body}/>
        } 
        if (content.type === 'journal'){
            return <JournalContent  title={content.title} body={content.body}/>
        }
        return <Content title={content.title} body={content.body} key={content.date}/>
  });
}