import React from 'react';
import * as operations from '../../content/contentOperations';
import ContentContainer from '../../organisms/content/ContentContainer';

/**
 * @summary Renders the meta page of the interactive resume
 */
export default function Meta(){
  const contentList = operations.getContentList();
  contentList.filter(x => x.category === 'meta');

  return <ContentContainer contentList={contentList}/>
}