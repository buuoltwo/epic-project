import React, { useEffect } from "react";
import { List, message, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import useStores from '../stores/index';
import { observer } from 'mobx-react';


const Component = observer( () => {
  const { HistoryStore } = useStores();
  const handleInfiniteOnLoad = () => {
    HistoryStore.find().then(data => console.log(data.list));
  };
  const props = {
    initialLoad:true,
    pageStart:0,
    loadMore:handleInfiniteOnLoad,
    hasMore:!HistoryStore.isLoading&&HistoryStore.hasMore,
    useWindow:true
  };
  useEffect(()=>{
    {
      console.log("挂载");
      return () => {
        console.log("卸载");
        HistoryStore.reset();
      }
    }
  }, [])
  return (
    <>
      <InfiniteScroll {...props}
        // initialLoad={true}
        // pageStart={0}
        // loadMore={handleInfiniteOnLoad}
        // hasMore={!HistoryStore.isLoading&&HistoryStore.hasMore}
        // useWindow={true}
      >
        <List
          dataSource={HistoryStore.list}
          renderItem={item => (
            <List.Item key={item.id}>
              testzzzzz
            </List.Item>
          )}
        >
          {
            HistoryStore.isLoading && HistoryStore.hasMore && (
              <div>
                <Spin />
              </div>
            )
          }
        </List>
      </InfiniteScroll>
    </>
  )
});

export default Component;