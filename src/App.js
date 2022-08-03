import './App.css'

import Banner from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card card-3',
  },
]

const App = () => (
  <ul className="banner-bg">
    {bannerCardsList.map(each => (
      <Banner details={each} key={each.id} />
    ))}
  </ul>
)

export default App
