import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/component/Home'
// import Choicelog from './component/Choicelog'
import Login from './component/Login'
// student
import Dash from './page/Student/Studentdashboard'
// teacher
import Dash2 from './page/Teacher/Teacherdashboard'
import AddStudentT from './page/Teacher/TeacherAddStudent'
// admin
import Dash1 from './page/Admin/Admindashboard'
import AddTeacher from './page/Admin/AdminAddTeacher'
import AddStudent from './page/Admin/AdminAddStudent'
import AddClass from './page/Admin/AdminAddClass'

// test
import Profile from './component/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/choice' element={<Choicelog />} /> */}



          {/* student */}
          <Route path='/student/dash' element={<Dash />} />


          {/* Teacher*/}
          <Route path='/teacher/dash' element={<Dash2 />} />
          <Route path='/teacher/addstudent' element={<AddStudentT />} />




          {/* Admin*/}
          <Route path='/admin/dash' element={<Dash1 />} />
          <Route path='/admin/addteacher' element={<AddTeacher />} />
          <Route path='/admin/addstudent' element={<AddStudent />} />
          <Route path='/admin/addclass' element={<AddClass />} />

          {/* test */}
          <Route path='/profile' element={<Profile />} />




        </Routes>
      </BrowserRouter>


    {/* <Home /> */}
    {/* <Choicelog /> */}
    {/* <Login /> */}
    {/* <Dash /> */}
    </>
  )
}

export default App
