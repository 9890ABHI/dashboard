import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Header from "../../components/Header";
import { formatDate } from "@fullcalendar/core";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const initialEvents = [
    { id: "1234", title: "all-day Envents", date: "2023-04-27" },
    { id: "1544", title: "time Envents", date: "2023-04-26" },
  ];
  const [currentEvents, setCurrentEvents] = useState([initialEvents]);
  const handleDateClick = (selected) => {
    const title = prompt("please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <>
      <Box m="20px">
        <Header
          title={"CALENDAR"}
          subtitle={"Full calendar interactive page"}
        />

        <Box display={"flex"} justifyContent={"space-between"}>
          {/* Calendar side bar */}
          <Box
            flex={"1 1 20%"}
            backgraoundColor={colors.greenAccent[100]}
            p="15px"
            borderRadius={"4px"}
          >
            <Typography variant="h5">Events</Typography>
            <List>
              {currentEvents.map((events) => (
                <ListItem
                  key={events.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0 ",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={events.title}
                    secondary={
                      <Typography>
                        {formatDate(events.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          {/* Claendar */}
          <Box flex="1 1 100%" ml="15px">
            <FullCalendar
              height={"75vh"}
              plugins={[dayGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={initialEvents}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Calendar;
