import React from 'react';
import Content from '../../molecules/content/Content';
import IconContent from '../../molecules/content/IconContent';
import JournalContent from '../../molecules/content/JournalContent';
import ShortContent from '../../molecules/content/VideoContent';
import * as contentOperations from '../../content/contentOperations';

/**
 * @summary Renders an array of Content boxes from an array of JSON objects
 * @property {string} history: React Router history object
 */
export default function ContentFilter(props){
  // Get the history. This will contain the URL which includes category
  const category = props.location.pathname
  const { history } = props;

  // Get the list of content from content folder
  const contentList = contentOperations.getContentList();
  // Filter the list by category
  var contentToRender = contentList.filter(x => category.includes(x.category));

  // Render content boxes based on their types
  return contentToRender.map((content) => {
        if (content.type === 'short'){
            return <ShortContent 
                      title={content.title} 
                      body={content.body}
                      key={content.date}
                    />
        } 
        if (content.type === 'journal'){
            return <JournalContent  
                      title={content.title} 
                      body={content.body}
                      key={content.date}
                    />
        }
        if (content.type === 'icon'){
          return <IconContent 
                    title={content.title} 
                    body={content.body} 
                    iconName={content.iconName || 'me'}
                    history={history}
                    key={content.date}
                  />
        }
        return <Content 
                  title={content.title} 
                  body={content.body} 
                  key={content.date}
                />
  });
}