import { useState } from 'react'
import Cricket from './Cricket.jsx'
import Discount from './Discount.jsx'
import Apples from './Apples.jsx'
import Increase from './Increase.jsx'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'
import Items from './Items.jsx'
import CourseGoal from './CourseGoal.jsx'
import Blog from './Blog.jsx'
import MovieCard from './MovieCard.jsx'

import MovieGrid from './MovieGrid.jsx'
import Apps from './Apps.jsx'
import CurrentDate from './CurrentDate.jsx'
import Today from './Today.jsx'




function App()
{
  return(
    <>
<h1>App.jsx File</h1>


<Increase  ></Increase>
<Apples ></Apples>
<Cricket ></Cricket>
<Discount ></Discount>
<AboutUs ></AboutUs>
<ContactUs ></ContactUs>
<Items/>

<CourseGoal title="learn-React" description="in-depth" />
<CourseGoal title="About ratan sir" description="Ratan sir nice" />
<Blog />

<MovieGrid/>
<Apps />
<Today/>
<p>***********</p>
<CurrentDate/>


    </>
  )
}
export default App