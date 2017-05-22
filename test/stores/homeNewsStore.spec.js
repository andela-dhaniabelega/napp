/* global define, it, describe */
import { expect } from 'chai';
import sinon from 'sinon';
import homeNewsStore from '../../src/stores/homeNewsStore';

describe('Home News Store', () => {

  it('should exist', () => {
    expect(homeNewsStore).to.exist;
  });



  it('should have a fetchGeneralArticles function', () => {
    expect(homeNewsStore.fetchGeneralArticles).to.be.a('function');
  });

  it('should have a fetchFeaturedArticles function', () => {
    expect(homeNewsStore.fetchFeaturedArticles).to.be.a('function');
  });
  it('should have a fetchTechArticles function', () => {
    expect(homeNewsStore.fetchTechArticles).to.be.a('function');
  });
  it('should have a fetchBusinessArticles function', () => {
    expect(homeNewsStore.fetchBusinessArticles).to.be.a('function');
  });
  it('should have a fetchSportsArticles function', () => {
    expect(homeNewsStore.fetchSportsArticles).to.be.a('function');
  });
  it('should have a fetchEntertainmentArticles function', () => {
    expect(homeNewsStore.fetchGeneralArticles).to.be.a('function');
  });



  it('should initialize Featured articles as empty array', () => {
    expect(homeNewsStore.featured).to.eql([]);
  });

  it('should initialize General articles as empty array', () => {
    expect(homeNewsStore.general).to.eql([]);
  });

  it('should initialize Business articles as empty array', () => {
    expect(homeNewsStore.business).to.eql([]);
  });

  it('should initialize Tech articles as empty array', () => {
    expect(homeNewsStore.tech).to.eql([]);
  });

  it('should initialize Enertainment articles as empty array', () => {
    expect(homeNewsStore.entertainment).to.eql([]);
  });

  it('should initialize Sports articles as empty array', () => {
    expect(homeNewsStore.sports).to.eql([]);
  });

  it('should have addChangeListener exist as a function', () => {
    expect(homeNewsStore.addChangeListener).to.be.a('function');
  });

  it('should have removeChangeListener exist as a function', () => {
    expect(homeNewsStore.removeChangeListener).to.be.a('function');
  });

  it ('can be subscribed to the Store changes', () => {
      var callback = sinon.spy();
      homeNewsStore.addChangeListener(callback);
      homeNewsStore.emit('change');

      expect(callback.calledOnce).to.be.true;
    });

  it ('can be subscribed to the Store changes', () => {
      var callback = sinon.spy();
      homeNewsStore.removeChangeListener(callback);
      homeNewsStore.emit('change');

      expect(callback.calledOnce).to.be.false;
    });

});

