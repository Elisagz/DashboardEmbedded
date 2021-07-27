import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SideBar from './Common/Sidebar';
import TeacherDashboardR from './Views/TeacherDashboardR';


const App= () =>  {

  return(
  <BrowserRouter>
  <Switch>

      
    
      
    {/* Routes */}
      <Route path="/Dashboards/TeacherDashboard" exact component={TeacherDashboardR} />
      {/*<Route path="/Dashboards/StudentDashboard" exact component={StudentDashboard} />
      <Route path="/Dashboards/StudentDetail" exact component={StudentDetail} />
      <Route path="/Dashboards/DrillStudentDetail" exact component={DrillStudentDetail} />
*/}
  </Switch>
</BrowserRouter>
  )
}

export default App;
