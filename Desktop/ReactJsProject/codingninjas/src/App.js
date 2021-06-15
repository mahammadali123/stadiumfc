import './App.css';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [tagsData, setTagsData] = useState([]);
  const [selected, setSelected] = useState('All Events');
  const [subCategory, setSubCategory] = useState('Upcoming');
  const [selectedTags, setSelectedTags] = useState([]);
  const [events, setEvents] = useState(['Empty']);
  const [filterTags, setFilterTags] = useState(false);
  const [someTags, setSomeTags] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  useEffect(() => {

    axios.get('https://api.codingninjas.com/api/v3/event_tags').then(response => {
      setTagsData(response.data.data.tags);
    });

  }, [someTags])
  useEffect(() => {
    const params = {
      event_category: selected.toLocaleUpperCase().replace(' ', '_'),
      event_sub_category: subCategory,
      tag_list: selectedTags.length === 0 ? '' : '' + selectedTags,
      offset: 0
    };
    axios.get('https://api.codingninjas.com/api/v3/events', { params }).then(response => {
      setEvents(response.data.data.events);
    })
  }, [selected, selectedTags, subCategory]);
  useEffect(() => {

    if (selectedTags.length !== 0) {
      setSelectedFilters(selectedTags)
    }


  }, [selectedTags])
  function returnFilterTags() {
    return <div className="filterTagsMain">
      <div className="filterHeader">
        <div
          onClick={() => {
            setFilterTags(false);
          }}
          className="eventBack"
          role="presentation"
        >
          <img src="/images/events-back.svg" alt="" />
        </div>
        <div className="filterEvents">Filter Events</div>
      </div>
      <div className="filterBody">
        {tagsData.map(value => {
          return <div
            className={`filterTag tag ${selectedFilters.includes(value) ? 'highlightTag' : ''}`}
            onClick={() => {
              console.log(selectedFilters, 'filtertags')
              if (!selectedFilters.includes(value)) {
                setSelectedFilters([...selectedFilters, value]);
                console.log(selectedFilters, 'filtertagsInsideif')


              }
              else {
                setSelectedFilters(selectedFilters.filter(item => item !== value));
                console.log(selectedFilters, 'filtertagsInsideelse')

              }


            }}

          >
            <p className="text">{value}</p>
          </div>
        })}
      </div>
      <div
        onClick={() => {
          setSelectedTags(selectedFilters)
          setFilterTags(false);
        }}
        className="applyFilters"
        role="presentation"
      >Apply Filters</div>
    </div>
  }

  function displayCount(count) {
    if (count === 0) {
      return 'none';
    }
    return 'block';




  }
  function returnTime(hours, minutes) {
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  function convertToDateFormat(timestamp) {

    var pubDate = new Date();
    pubDate.setTime(timestamp * 1000);

    var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var formattedDate = returnTime(pubDate.getHours(), pubDate.getMinutes()) + ',' + pubDate.getDate() + ' ' +
      monthname[pubDate.getMonth()] + '' + pubDate.getFullYear();
    return formattedDate;
  }
  const event_categories = [
    {
      event: 'All Events',
      activeImage: '/images/all-events-selected.svg',
      image: '/images/all-events-unselected.svg'
    },
    {
      event: 'Webinar',
      activeImage: '/images/webinar-selected.svg',
      image: '/images/webinar-unselected.svg'
    },
    {
      event: 'Coding Events',
      activeImage: '/images/coding-events-selected.svg',
      image: '/images/coding-events-unselected.svg'
    },
    {
      event: 'Bootcamp Events',
      activeImage: '/images/bootcamp_events_selected.png',
      image: '/images/bootcamp_events_unselected.png'
    },
    {
      event: 'Workshop',
      activeImage: '/images/workshop_selected.png',
      image: '/images/workshop_unselected.png'
    }
  ];
  return (
    <div>
      <div className="filterPopUp" style={{ display: filterTags ? 'block' : 'none' }} >
        {returnFilterTags()}
      </div>
      <div className="header">
        <div className="heading">Events & News</div>
        <div className="subHeading">Learn, Compete & Grow</div>
      </div>
      <div className="mainSection">
        <div className="eventSection">
          <div className="eventCategories row">
            {event_categories.map(value => {
              return <div className="row">
                <img
                  className={"eventIcon"}
                  src={selected === value.event ? value.activeImage : value.image}
                  alt=""
                />
                <div
                  style={{ color: selected === value.event ? '#fa7328' : '#9e9e9e' }}
                  className="event"
                  onClick={() => {
                    setSelected(value.event)
                  }}
                  role="presentation"
                >{value.event}</div>
              </div>
            })}
          </div>
          <div className="subCategories row">
            {['Upcoming', 'Archived', 'All Time Favorites'].map(value => {
              return <div
                style={{ color: subCategory === value ? '#fa7328' : '#9e9e9e' }}
                className="subCategory"
                onClick={() => {
                  setSubCategory(value);
                }}
              >{value}</div>
            })}
          </div>
          <div className="row itemsCenter">
            <div className="row eventCards">
              {events.length !== 0 ? events.map(value => {
                return <div className="eventCard row column">
                  <div className="subSection">
                    <div className="eventImage">
                      <img className="fitImage" src={value.mobile_cover_picture} alt="cover_picture" />
                      <div className="regestrationTitle">
                        <div className="circle"></div>
                        Regestration<b>open</b> till <b>{convertToDateFormat(value.event_start_time)}</b> </div>
                    </div>
                    <div className="eventTitle">{value.name}</div>
                    <div className="eventDetails row">
                      <div className="row column marginBlock">
                        <div className="detailsHeading">Starts on</div>
                        <div className="details">{convertToDateFormat(value.event_start_time)}</div>
                      </div>
                      <div className="row column marginBlock">
                        <div className="detailsHeading">Entry Fee</div>
                        <div className="details">{value.fees === 0 ? 'Free' : value.fees}</div>
                      </div>
                      <div>
                        <div className="detailsHeading">Venue</div>
                        <div className="details">{value.venue}</div>
                      </div>
                    </div>
                    <div className="eventDesc">
                      {value.short_desc}
                    </div>
                    <div className="eventCardTags" >
                      {value.card_tags != undefined || value.card_tags != null ? Object.values(value.card_tags).map(tag => {
                        return <div className="tag">{tag}</div>
                      }) : null}


                    </div>
                    <div className="row eventFooter">
                      <div className="userSection">
                        <div className="row">
                          {value.registered_users != undefined || value.registered_users != null ? Object.values(Object.values(value.registered_users.top_users)).map(item => {
                            return <div>
                              <img className="topUserImage" src={item.image_url === null ? '/images/unknown.png' : item.image_url} alt="" />
                            </div>
                          }) : null
                          }
                        </div>
                        <div
                          style={{ display: value.registered_users != undefined || value.registered_users != null ? displayCount(value.registered_users.other_users_count) : null }}
                          className="otherUsers">
                          and <strong>{value.registered_users != undefined || value.registered_users != null ? value.registered_users.other_users_count : null}</strong> others registered

                        </div>
                      </div>
                      <div className="registerNow" style={{ display: subCategory === 'Archived' ? 'none' : null }}>
                        <img src="/images/register_now.png" height="30px" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              }) : <div className="noEvents">No Events Found With Selected Tag</div>}
            </div>
            <div className="tags">
              <div className="tagsHeading">TAGS</div>
              {tagsData.length !== 0 && someTags.length === 0 ? setSomeTags(tagsData.slice(0, 12)) : null}
              {someTags.map(value => {

                return <div
                  className={`tag ${selectedTags.includes(value) ? 'highlightTag' : ''}`}
                  onClick={() => {

                    if (!selectedTags.includes(value)) {

                      setSelectedTags([...selectedTags, value]);

                    }
                    else {
                      setSelectedTags(selectedTags.filter(item => item !== value));

                    }


                  }}

                >
                  <p className="text">{value}</p>
                </div>
              })}
              <div
                onClick={() => {
                  setSomeTags(tagsData);
                }}
                className="seeMore" style={{ display: someTags === tagsData ? 'none' : null }}>See 10 More Tags</div>
            </div>
          </div>

        </div>
      </div>
      <div
        onClick={() => {
          setFilterTags(true);
        }}
        className="filterTags"
        role="presentation"
      >
        <img src="/images/filter-events-wave.svg" alt="" />
        <div className="filterEvents">Filter Events</div>
      </div>

    </div>
  );
}


export default App;
