import './App.css';
import EditRow from './components/EditRow';
import Form from './components/Form';
import SimpleForm from './components/SimpleForm';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <SimpleForm/>
      {/* <Table/> */}
      <EditRow/>
    </div>
  );
}

export default App;
