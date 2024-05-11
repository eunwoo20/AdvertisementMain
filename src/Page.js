import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const drawerWidth = 240;
const navItems = ['FAQ', 'Support', 'Log in', 'Get Started'];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Camera Tales Adv
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Camera Tales Adv
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <Item>
              <h3> Camera Tales Advantage
                 <h1><p>Reach your audience at scale, across their entertainment journey</p></h1> 
                  <Button variant="contained">Get Started</Button>
              </h3>
      </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
        <img
                  src="https://cdn.marvel.com/content/1x/ae_digital_packshot.jpg"
                   alt='503' 
                  width={'531'}
                />
      </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
        <Typography variant="h6" gutterBottom>
                 <h3>MX Advantage</h3> 
                 </Typography>
          <Typography variant="h4" gutterBottom>
               <p>Why advertise with us</p>
               </Typography>    
      </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
        <Typography variant="h3" gutterBottom>
                     236Mn 
                 </Typography>
          <Typography variant="subtitle1" gutterBottom>
               <p>Monthly active users</p>
               </Typography>    
      </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
        <Typography variant="h3" gutterBottom>
                     1B+
                 </Typography>
          <Typography variant="subtitle1" gutterBottom>
               <p>App downloads</p>
               </Typography>    
      </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
        <Typography variant="h3" gutterBottom>
                         200K+
                 </Typography>
          <Typography variant="subtitle1" gutterBottom>
               <p>Hours of content</p>
               </Typography>    
      </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
        <Typography variant="h3" gutterBottom>
                    800+ Shows
                 </Typography>
          <Typography variant="subtitle1" gutterBottom>
               <p>Original, exclusive & international content</p>
               </Typography>    
      </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
        <Typography variant="h6" gutterBottom>
                 <h3>MX Advantage</h3> 
                 </Typography>
          <Typography variant="h4" gutterBottom>
               <p>Immersive Ad Formats to drive Brand Awareness and Engagement</p>
               </Typography>    
      </Item>
      </Grid>
      
      <Grid item xs={12} justifyContent={'center'}>
        <Item>
        <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
      </Item>
      </Grid>
      <section class=" landing-section business-section">
      <div class="grid-container">
          <div class ="row">
            <div class="col xs-24 lg-10 business-section_content">
              <div class="section-header">
                <h2 class="section-title">
                 <small>"Our Audience"</small>
                 "Reach Audience that matters to you"
                </h2>
              </div>
              <div class=" business-section_text">
                   <p> Maximize your advantage with a highly engaged audience 
                    coming together from India and Bharat, across every entertainment 
                    touchpoint within few simple steps.</p>
                    </div>
                    <a href="/sign-up" class="el-button el-button--default el-button--ui-md" data-gtm="landing-business-get-started-btn">
                   <span>Get started</span>
                   </a>
              </div>
              <div class="col xs-24 lg-14">
              <img
                  src="https://media.istockphoto.com/id/987130494/photo/group-of-students-joking-and-getting-to-know-each-other.webp?b=1&s=170667a&w=0&k=20&c=iUjlsmtafaEYkEdeaMVaH6I0rzZetZlIQz0iv_31Ok4="
                   alt='' 
                  width={''}
                />
                </div>
            </div>
          </div> 
      </section>
          </Grid>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
