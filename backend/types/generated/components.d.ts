import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlogList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_lists';
  info: {
    displayName: 'blog-list';
  };
  attributes: {
    badge: Schema.Attribute.String;
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<['Grid', 'Featured', 'Minimal']>;
  };
}

export interface BlocksCaseStudyList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_case_study_lists';
  info: {
    displayName: 'case-study-list';
  };
  attributes: {
    badge: Schema.Attribute.String;
    case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<['Grid', 'Featured', 'Timeline']>;
  };
}

export interface BlocksContactForm extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_forms';
  info: {
    displayName: 'contact-form';
  };
  attributes: {
    description: Schema.Attribute.String;
    formfields: Schema.Attribute.Component<'shared.form-field', true>;
    submitButtonText: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    badge: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<['Centered', 'Split', 'Default']>;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    badge: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<
      ['Default', 'Centered', 'Banner', 'Split']
    >;
  };
}

export interface BlocksDocumentationList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_documentation_lists';
  info: {
    displayName: 'documentation-list';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    documentations: Schema.Attribute.Relation<
      'oneToMany',
      'api::documentation.documentation'
    >;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<['List', 'Accordion', 'Sidebar']>;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    items: Schema.Attribute.Component<'shared.faq-card', true>;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<
      ['Accordion', 'Simple', 'TwoColumn']
    >;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<
      ['Default', 'Split', 'Centered', 'Dark']
    >;
  };
}

export interface BlocksResourceList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_resource_lists';
  info: {
    displayName: 'resource-list';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    resources: Schema.Attribute.Relation<'oneToMany', 'api::resource.resource'>;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<['List', 'Grid']>;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<['Grid', 'Cards', 'Minimal']>;
  };
}

export interface BlocksStats extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    items: Schema.Attribute.Component<'shared.stat-item', true>;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<['Grid', 'Cards', 'Minimal']>;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    copyright: Schema.Attribute.Component<'shared.copyright', false>;
    footlogo: Schema.Attribute.Component<'shared.logolink', false>;
    link: Schema.Attribute.Component<'shared.quicklinks', true>;
    sociallink: Schema.Attribute.Component<'shared.sociallink', true>;
    variants: Schema.Attribute.Enumeration<['Default', 'Dark', 'Minimal']>;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logolink', false>;
    navitem: Schema.Attribute.Component<'shared.link', true>;
    variants: Schema.Attribute.Enumeration<
      ['Default', 'Glass', 'Dark', 'Transparent']
    >;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<['Primary', 'Secondary', 'Outline']>;
  };
}

export interface SharedCopyright extends Struct.ComponentSchema {
  collectionName: 'components_shared_copyrights';
  info: {
    displayName: 'copyright';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedDropdown extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdowns';
  info: {
    displayName: 'dropdown';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_cards';
  info: {
    displayName: 'faq-card';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface SharedFootlink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footlinks';
  info: {
    displayName: 'footlink';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedFormField extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_fields';
  info: {
    displayName: 'Form Field';
  };
  attributes: {
    HalfWidth: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
    Required: Schema.Attribute.Boolean;
    Type: Schema.Attribute.Enumeration<
      ['text', 'email', 'phone number', 'textarea']
    >;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    variants: Schema.Attribute.Enumeration<
      ['Default', 'Rounded', 'Circle', 'Hero']
    >;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    Navdropdown: Schema.Attribute.Component<'shared.dropdown', true>;
  };
}

export interface SharedLogolink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logolinks';
  info: {
    displayName: 'logolink';
  };
  attributes: {
    description: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuicklinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_quicklinks';
  info: {
    displayName: 'Quicklinks';
  };
  attributes: {
    footlink: Schema.Attribute.Component<'shared.footlink', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'service-card';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSociallink extends Struct.ComponentSchema {
  collectionName: 'components_shared_sociallinks';
  info: {
    displayName: 'sociallink';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'stat-item';
  };
  attributes: {
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.blog-list': BlocksBlogList;
      'blocks.case-study-list': BlocksCaseStudyList;
      'blocks.contact-form': BlocksContactForm;
      'blocks.content': BlocksContent;
      'blocks.cta': BlocksCta;
      'blocks.documentation-list': BlocksDocumentationList;
      'blocks.faq': BlocksFaq;
      'blocks.hero': BlocksHero;
      'blocks.resource-list': BlocksResourceList;
      'blocks.services': BlocksServices;
      'blocks.stats': BlocksStats;
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'shared.button': SharedButton;
      'shared.copyright': SharedCopyright;
      'shared.dropdown': SharedDropdown;
      'shared.faq-card': SharedFaqCard;
      'shared.footlink': SharedFootlink;
      'shared.form-field': SharedFormField;
      'shared.image': SharedImage;
      'shared.link': SharedLink;
      'shared.logolink': SharedLogolink;
      'shared.quicklinks': SharedQuicklinks;
      'shared.service-card': SharedServiceCard;
      'shared.sociallink': SharedSociallink;
      'shared.stat-item': SharedStatItem;
    }
  }
}
