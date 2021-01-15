import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TrackChanges from '@material-ui/icons/TrackChanges'
import FileCopy from '@material-ui/icons/FileCopy'
import IconButton from '@material-ui/core/IconButton'


const PackageCard = ({ title, command, description, icons }) => {
  return (
    <Card elevation={4} style={{ margin: 18, maxWidth: 350 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#F3F4F4',
            padding: 8,
          }}
        >
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="h2"
          >
            {command}
          </Typography>
          <IconButton
            aria-label="Icon button"
            onClick={() => {
              if (window.clipboardData) {
                // Internet Explorer
                window.clipboardData.setData('Text', command)
              } else {
                try {
                  navigator.clipboard.writeText(command)
                } catch (error) {}
              }
            }}
          >
            <FileCopy />
          </IconButton>
        </div>
        <br />
        {icons}
        <br />
        <Typography variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const PageContent = ({ setComponents }) => {
  return (
    <React.Fragment>
      <div style={{ height: 20 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Your Vote. Your Parks.
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Choose a park below to see updates, timelines, & photos
      </Typography>
      <div style={{ height: 30 }} />

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <PackageCard
          title={'53 Acre Park'}
          // command={'npx create-react-app my-app --template base'}
          description={
            'Coming soon to 53 acres near you'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="slide.jpg"
                alt="slide"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
        <PackageCard
          title={'Steward Street'}
          // command={'npx create-react-app my-app --template material-ui'}
          description={
            'From Public Works to working for public'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="slide.jpg"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              {/* <img src="material-ui.png" alt="react" style={{ width: 50 }} /> */}
            </div>
          }
        />
        <PackageCard
          title={'Spell Field'}
          // command={'npx create-react-app my-app --template material-ui'}
          description={
            'Baseball field, tennis courts, and new lights'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="ballfield.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              {/* <img src="material-ui.png" alt="react" style={{ width: 50 }} /> */}
            </div>
          }
        />
        <PackageCard
          title={'Loftis Field'}
          // command={'npx create-react-app my-app --template rmw'}
          description={'Ballfields, corn fields, and more!'}
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="ballfield.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              {/* <img src="material-ui.png" alt="react" style={{ width: 50 }} /> */}
              {/* <img src="firebase.png" alt="react" style={{ width: 50 }} /> */}
            </div>
          }
        />
      </div>
      <div style={{ height: 30 }} />
      <div
        ref={(r) => {
          if (r) {
            setComponents(r)
          }
        }}
        style={{
          //height: 400,
          backgroundColor: '#2D2D2D',
          backgroundImage: 'radial-gradient( #4F4F4F,#242424)',
        }}
      >
        <div style={{ height: 30 }} />
        <Typography
          variant="h3"
          //color="textSecondary"
          style={{ margin: 16, textAlign: 'center', color: 'white' }}
        >
          Your Parks
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          #ParkLife
        </Typography>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TrackChanges style={{ fontSize: 150, color: 'white' }} />
        </div>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          Something cool and snappy here to say about the Parks would be good
        </Typography>
        <div style={{ height: 50 }} />
      </div>

      {/* <div style={{ height: 30 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Only the best
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Every template is a collection of very carefully picked packages and
        projects. Only the creme de la creme of the react ecosystem
      </Typography>
      <div style={{ height: 30 }} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <img src="react.png" alt="react" style={{ width: 150 }} />
        <img src="material-ui.png" alt="react" style={{ width: 150 }} />
        <img src="firebase.png" alt="react" style={{ width: 150 }} />
      </div> */}
      <div style={{ height: 50 }} />
    </React.Fragment>
  )
}

export default PageContent
