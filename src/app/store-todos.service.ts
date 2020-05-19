import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTodosService {
  nav = [
    'Articles', 'Events', 'Reports', 'Customer Stories'
  ];
  //sidebar
  sidebar = [
    {
      category: 'Report', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Read report', img:'https://via.placeholder.com/150x150?text=Text'
    },
    {
      category: 'Blog Post', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Read story', img:'https://via.placeholder.com/150x150?text=Text'
    },
    {
      category: 'Webinar', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Watch webinar', img:'https://via.placeholder.com/150x150?text=Text'
    },
    {
      category: 'Report', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Read report', img:'https://via.placeholder.com/150x150?text=Text'
    },
  ];
  // new blog post

  blogPosts = [
    {
      category: 'Blog Post', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      btn:'Read report', img:'https://via.placeholder.com/300x250?text=Text'
    },
    {
      category: 'Blog Post', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      btn:'Read report', img:'https://via.placeholder.com/300x250?text=Text'
    },
    {
      category: 'Blog Post', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      btn:'Read report', img:'https://via.placeholder.com/300x250?text=Text'
    }
  ];
  // Popular Resources

  popularRes = [
    {
      category: 'Blog Post', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Read story', img:'https://via.placeholder.com/150x150?text=Text'
    },
    {
      category: 'Webinar', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Watch webinar', img:'https://via.placeholder.com/150x150?text=Text'
    },
    {
      category: 'Report', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Read report', img:'https://via.placeholder.com/150x150?text=Text'
    }
  ];
  // Upcoming Events

  events = [
    {
      category: 'Webinar', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Watch webinar', img:'https://via.placeholder.com/300x250?text=Text'
    },
    {
      category: 'Webinar', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Watch webinar', img:'https://via.placeholder.com/300x250?text=Text'
    },
    {
      category: 'Webinar', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis.',
      btn:'Watch webinar', img:'https://via.placeholder.com/300x250?text=Text'
    }
  ];
  //black block icons

  blackBlok = [
    ' fa fa-instagram', ' fa fa-telegram', ' fa fa-facebook', 'fa fa-twitter'
  ];
  //footer

  solution = [
    'Studio', 'Lightbox', 'Wavi'
  ];
  resFooter = [
    'Blog', 'Customers', 'Video & Showcase', 'Watch a Demo'
  ];
  whyWibbitz = [
    'Marketing', 'Social Media', 'News & Editorial', 'Agencies', 'Internal', 'Communications', 'Enterprise'
  ];

  company = [
    'Company','About Us', 'Jobs', 'Press'
  ];

  legalLink = [
    'Terms & Conditions', 'Privacy Policy'
  ];
  footerIcons = [
    ' fa fa-instagram', ' fa fa-telegram', ' fa fa-facebook', 'fa fa-twitter'

  ];


  constructor() { }
}
