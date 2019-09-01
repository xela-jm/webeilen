import React from 'react';
import ItemsRows from "./ItemsRow";
import {HIDE_LOGIN, SET_USER_DATA} from "../../../actions/types";

export default class ProductsGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
                itemsFilter: {
                    offset: 0,
                    color: 1,
                    name: null,
                    price: null,
                    size: null,
                    description: null
                },
                itemsFiltered: {
                    total: 0,
                    offset: 24,
                    items: []
                }
            }
    }

    componentDidMount() {
        this.getProducts();
    }
    //get products data
    getProducts() {
        let params = this.state.itemsFilter;

        let query = Object.keys(params)
            .filter(k => params[k] !== null)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');

        return fetch('http://localhost:3012/test/test?' + query,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(json => {
                let newState = this.state;
                newState.itemsFiltered = {
                    items: json,
                    total: 100,
                    offset: 0
                }

                this.setState(newState);
                /*this.state.itemsFiltered.items = json;
                this.state.itemsFiltered.total = 100;
                this.state.itemsFiltered.offset= 0;*/

            })
            .catch
            (err => {debugger;}) //TODO: add disptatcher
    }

    setProps() {
    }


    render() {
      let info = {
          total: 100,
          items: this.state.itemsFiltered.items,
          offset: 24,
          itemsOnPage: 12
      };

       let itemsRows = {};
       let i,j, tempArr, chunk = 4;
       let numberOfRows = 0;
       for (i=0,j=info.items.length; i<j; i+=chunk) {
           tempArr = info.items.slice(i,i+chunk);
           itemsRows.i = tempArr;
           numberOfRows++;
           // do whatever
       }




       var rows = [];
       for (let j = 0; j < numberOfRows; j++) {
           // note: we add a key prop here to allow react to uniquely identify each
           // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
           rows.push(<ItemsRows items={this.state.itemsFiltered.items} offset={j*4}></ItemsRows>);
       }
       const html =
           <div>
            <div className="container">
               {rows}
             </div>
           </div>;

      return (
          html
/*         <div className="iron-product-item post-rounded">
            <Card>
               <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
                  <Link to="javascript:void(0)" className='d-block'>
                     <CardMedia
                        height="140"
                        component="img"
                        image={require(`../../assets/images/${data.image}`)}
                     />
                  </Link>
                  <div className="iron-overlay-content d-flex justify-content-end align-items-start">
                     <div className="iron-overlay-holder">
                        <Button onClick={deleteProduct}><i className="material-icons">delete</i></Button>
                     </div>
                  </div>
               </div>
               <CardContent className="iron-product-content p-20 border">
                  <h5 className="text-truncate mb-10" ><Link to="#" >{data.name}</Link></h5>
                  <p className="fs-14 mb-10">{data.category}</p>
                  <div className="price-wrap">
                     <span> <CurrencyIcon /> {data.price}</span>
                  </div>
                  <div className="iron-btn-grp">
                     <Link to={`/admin-panel/admin/product-edit/${data.type}/${data.objectID}`}>
                        <IconButton className="btn-wrap">
                           <i className="material-icons">edit</i>
                        </IconButton>
                     </Link>
                  </div>
               </CardContent>
            </Card>
         </div>*/
      );
   }
}
