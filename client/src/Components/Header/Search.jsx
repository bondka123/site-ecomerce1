import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, styled, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';


const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
  position: relative;
`;

const SearchIconWrapper = styled(Box)`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  cursor: pointer;
`;

const ListWrapper = styled(List)`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 10;
  background: #FFFFFF;
  border: 1px solid #ccc;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = useSelector(state => state.getProducts);
  const { products = [] } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    if (text.trim() === '') {
      setFiltered([]);
      setOpen(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      const result = products.filter(product =>
        product.title.longTitle.toLowerCase().includes(text.toLowerCase())
      );
      setFiltered(result);
      setOpen(true);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [text, products]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setOpen(text.length > 0);
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setOpen(text.length > 0);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={text}
      />
      <SearchIconWrapper onClick={handleSearchClick}>
        <SearchIcon />
      </SearchIconWrapper>

      {open && (
        <ListWrapper>
          {loading ? (
            <ListItem>
              <CircularProgress size={20} />
              <span style={{ marginLeft: 10 }}>Chargement...</span>
            </ListItem>
          ) : filtered.length > 0 ? (
            filtered.map(product => (
              <ListItem key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => setOpen(false)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          ) : (
            <ListItem>Aucun résultat trouvé</ListItem>
          )}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
