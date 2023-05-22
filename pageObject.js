exports.pageObject = {
  login:{
    mailImput: '#ember8',
    pssImput: '#ember10',
    loginBtn: '#ember12',
  },
  post: {
    newPostBtn: '.ember-view.gh-btn.gh-btn-green',
    titleImput: '.gh-editor-title',
    descriptionImput: '.koenig-editor__editor.__mobiledoc-editor',
    informationAlert: '.gh-alert-content',
    publishBtn: '.gh-publishmenu-trigger',
    publishNowBtn: '.gh-publishmenu-button',
    postLink: '.gh-list-row.gh-posts-list-item:last-child',
    unpublishRadioBtn: '.gh-publishmenu-radio-button:first-child',
    publishMenu: '.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view',
    publishRadioBtn: '.gh-publishmenu-section > div:nth-child(2) > div:nth-child(1)',
    titleNotification: '.gh-notification-title',
    postList: '.gh-list-row.gh-posts-list-item',
    draffBtn: '#ember1288',
    postBtn: '#ember1406',
    postListLi: '.posts-list > li'
  },
  tag: {
    linkMenu: '.gh-nav-list > li:nth-child(4)',
    newTagBtn: '.view-actions > a:nth-child(2)',
    nameImput: '#tag-name',
    tagList: '.tags-list > *',
    tagListLi: '.tags-list > li',
    tagListTitle: '.tags-list > li > a > h3',
    colorImput: '.input-color > input:nth-child(1)',
    saveBtn: '.view-actions > button:nth-child(1)',
    responseMessage: '.response',
    invalidMessage: '.error > p:nth-child(2)',
    longMessage: '.form-group.error.ember-view > p',
    tagToEdit: '.tags-list:last-child',
    deleteBtn: '.modal-footer > button:nth-child(2)',
    internalTagBtn: '.view-actions > div > button:nth-child(2)'
  },
  staff: {
    staffMenu: '.gh-nav-list > li:nth-child(5)',
    ownerBtn: '.apps-grid > div:nth-child(3) > a',
    nameImput: '#user-name',
    emailImput: '#user-email',
    offPage: '.user-image.bg-whitegrey',
    saveBtn: '.gh-btn.gh-btn-blue',
    nameToEditImput: '.apps-grid > div:nth-child(3) > a > article > div:nth-child(1) > :nth-child(2) > h3',
    errorMessage: '.form-group.error.ember-view > p:nth-child(3)',

  },
  page: {
    newPageBtn: '.gh-nav-list > li:nth-child(3)',
    newPageValidate: 'fw4.midgrey-l2',
    editBtn: '.gh-content-entry-title',
    postSettingsBtn: '.post-settings',
    deleteBtn: '.settings-menu-delete-button',
    deleteConfirmBtn: '.gh-btn.gh-btn-red.gh-btn-icon.ember-view',
    noPostMessage: '.no-posts-box',
    pageList: '.gh-list > *',
    expandBtn: '.gh-setting-first .gh-setting-action .gh-btn',
    titleImput: '.ember-text-field.gh-input.ember-view'
  },
  settings: {
    saveBtn: '.gh-btn.gh-btn-blue.gh-btn-icon.ember-view',
    detailsMenu: '.gh-nav-menu-details-blog',
    errorMessage: '.form-group.error.ember-view > p:nth-child(2)'
  }
}