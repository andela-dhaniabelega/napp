import React from 'react';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Article from '../../src/components/Article';

const shallowRenderer = new ReactShallowRenderer();
shallowRenderer.render(<Article />);

describe('Article Page', () => {

	describe('Constructor', () => {
		it('should set initial states correctly', () => {
			let wrapper = shallow(<Article />);
			const initialState = {
              articles: [],
              sources: []
            };
        expect(wrapper.state()).toEqual(initialState);  
        expect(wrapper.instance().fetchNewsArticles).toBeDefined();
        expect(wrapper.instance().fetchNewsSources).toBeDefined();
        expect(wrapper.instance().goback).toBeDefined();
		});
    });

    describe('Methods', () => {
		it('should be defined', () => {
			let wrapper = shallow(<Article />); 
				expect(wrapper.instance().fetchNewsArticles).toBeDefined();
				expect(wrapper.instance().fetchNewsSources).toBeDefined();
				expect(wrapper.instance().goback).toBeDefined();
		});
		
    });

    describe('Render function', () => {

        const wrapper = mount(<Article />)

		it('renders a snapshot', () => {
			const tree = renderer.create(<Article />).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('Renders the root elements', () => {
			const renderedRoot = shallowRenderer.getRenderOutput();
			expect(renderedRoot.type).toEqual("div");
			expect(renderedRoot.props.className).toEqual('wrapper');    
		});

		it('should render state correctly (Articles)', () => {
			wrapper.setState({
				articles: [{
					urlToImage: 'urlToImage',
					title: 'Article Title',
					description: 'Article Description',
					author: 'Article Author'
				}]
           }); 
           const h3_title = wrapper.find('.truncate');
           const h3_author = wrapper.find('.article-author');
           const p = wrapper.find('.article-description');
           expect(h3_title.text()).toBe('Article Title');
           expect(h3_author.text()).toBe('by Article Author');  
           expect(p.text()).toBe('Article Description');    
		});

		it('should render updated state correctly (Sources)', () => {
			wrapper.setState({
				sources: [{
					name: 'Source Name',
					sortBysAvailable:[
						'top',
						'latest'
					]
				}]
           }); 
           const h2 = wrapper.find('.source-name'); 
           expect(h2.text()).toBe('Source Name');  
		});
    });
    
});