import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Search from './Search'
function App() {
  return (
    <MuiThemeProvider>
               <div>
                   <Navbar/>
                   <Search/>
               </div>
            </MuiThemeProvider>
  );
}

export default App;
