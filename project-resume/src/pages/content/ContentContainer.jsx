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
  // Get the history. This will contain the URL which includes category
  const { history } = props;

  // Get the list of content from content folder
  const contentList = contentOperations.getContentList();
  // Filter the list by category
  contentList = contentList.filter(x => x.category == history)

  // Render content boxes based on their types
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