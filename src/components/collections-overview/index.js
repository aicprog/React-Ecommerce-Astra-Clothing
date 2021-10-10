import React from 'react'
import styled from 'styled-components'
import CollectionPreview from "../../components/collection-preview";

//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => {

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
			<Wrapper>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</Wrapper>
		);
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview)

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

`;
