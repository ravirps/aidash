import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  constructor()
  {
    super();
    this.state={
      SimpleCardData:[
        {
          url:"https://image.flaticon.com/icons/png/512/747/747376.png",
        value:"90",
         infokey:"Students"
        },
        {
          url:"https://as2.ftcdn.net/jpg/00/65/91/37/500_F_65913748_7jmLgR7gbZXWyAeZAlV3rXTL05JjNtjK.jpg",
        value:"90",
        infokey:"Average Marks"
        },
        {
          url:"https://as2.ftcdn.net/jpg/02/24/73/79/500_F_224737977_lbicFEr4eSQU6dzCbMVmrYrfSGU0WUq8.jpg",
        value:"9 (19%)",
         infokey:"Under Performing Students"
        },
        {
          url:"https://as1.ftcdn.net/jpg/02/99/80/76/500_F_299807695_gSRbRVzf2OI8k3ya2oSnM96fcNsRna0K.jpg",
        value:"83%",
         infokey:"Completed Homework"
        }
      ],
      bargraphdata:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Applied Students',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
      secondrowdata:[
        {
          url:"https://image.flaticon.com/icons/png/512/3112/3112946.png",
          value:"25", infokey:"lessions left"
        },
        {
          url:"https://image.flaticon.com/icons/png/512/2972/2972531.png",
            value:"125", infokey:"Hours spent on lessions"
        }
      ],
      piegraphdata:{
        labels: ['Group of 30 students', 'Group of 5 students', 'Group of 10 students'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
      studentlist:[
        {
          name:"Ravi", marks:"10"
        },
        {
          name:"Ranu", marks:"9.2"
        },
        {
          name:"Ronak", marks:"8"
        },
        {
          name:"Rajesh", marks:"7"
        },
        {
          name:"Raj shekhar", marks:"6.4"
        },
        {
          name:"Rohan", marks:"5.6"
        },
        {
          name:"Ramdayal", marks:"5"
        }
      ]
    }
  }
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home"  render={(props) => <DefaultLayout { ...props} data={this.state} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    )
  }
}

export default App
