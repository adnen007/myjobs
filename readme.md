"myjobs is a website to organize your jobs search and give you static about your prograss"

things that need state :

- the menu slide and display already have state but need to combine it with the main state
- in the header > account > logout
- in menu> content > ul > li and a class to li of the current section to make it looks unique
- in allJobs > befor the jobList > the number of the jobs
- state for the search component
- the pagination component in the allJobs component make a state to detect if you need to show the pagination or not and the number of the pages that will display
- add state to the addjobs page

- complete the status page note for the graph just know what the state you will need i mean what the data the graph mean just to know what the part of state you should pass to the component of the
  graph

components that need state.

components that contain state.

- app > header (for the menu show and hide and the log out)
- app > menu (state the select the current section)
- app > stats > statusStatus (state for the pending ,interview job decilned)

- app > stats > statusGraph (number the application for the jobs in each month)

- app > allJObs (stats to now the number of the jobs) and the result of the search
- app > allJObs > Search(state to select the wanted jobs and then fetch them)

- app > profile (state to know the profile information)

- state for the state fo the menu display or hide it.
- in the status state for the data that we will fetch for the pending intervi and declinde number and for the number of the jobs for each month
- in the add jobs and profile state for the controlled forms
- in all jobs for the jobs because they will change after every fetch with the search.
- // tommorrow write the data you need and when you need them to rerender // prepare your apis to provide this data // start in building the states and fetching the data
