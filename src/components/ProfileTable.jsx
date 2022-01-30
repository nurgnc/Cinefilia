/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// component
import LikeAndBookmarkButton from './LikeAndBookmarkButton';
// css
import { Flex } from '../styles/baseStyles';

function ProfileTable() {
  const { likes, bookmarks } = useSelector((state) => state);
  const [select, setSelect] = useState();

  const allData = likes.concat(bookmarks);
  const filterData = [...new Set(allData.map(JSON.stringify))].map(JSON.parse);

  const [data, setData] = useState(filterData);

  useEffect(() => {
    if (select === 'date') {
      const sortDate = filterData
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      console.log(sortDate);
      setData(sortDate);
    } else if (select === 'like') {
      setData(likes);
    } else if (select === 'bookmark') {
      setData(bookmarks);
    }
    return setData(filterData);
  }, [select]);

  console.log(select);
  return (
    <div>
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="filter">Filter by</option>
        <option value="date">Closest Release Date</option>
        <option value="like">Just My Favorites</option>
        <option value="bookmark">Just My Seenlist</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Genres</th>
            <th>Like/SeenList</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.id}
                </td>
                <td>
                  {item.title}
                  ,
                  {' '}
                  (
                  {item.releaseDate}
                  )
                </td>
                <td>
                  {item?.genre?.map((genre) => (
                    <span key={genre.id}>
                      {genre.name}
                      ,
                      {' '}
                    </span>
                  ))}
                </td>
                <td>
                  <Flex>
                    <LikeAndBookmarkButton
                      id={item.id}
                      title={item.title}
                      noPicture={item.img}
                      releaseDate={item.releaseDate}
                      genres={item.genre}
                    />
                  </Flex>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ProfileTable;
