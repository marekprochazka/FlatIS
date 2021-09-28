window.Urls=(function(){"use strict";var data={"urls":[["admin:app_list",[["admin/%(app_label)s/",["app_label"]]]],["admin:auth_group_add",[["admin/auth/group/add/",[]]]],["admin:auth_group_change",[["admin/auth/group/%(object_id)s/change/",["object_id"]]]],["admin:auth_group_changelist",[["admin/auth/group/",[]]]],["admin:auth_group_delete",[["admin/auth/group/%(object_id)s/delete/",["object_id"]]]],["admin:auth_group_history",[["admin/auth/group/%(object_id)s/history/",["object_id"]]]],["admin:auth_user_add",[["admin/auth/user/add/",[]]]],["admin:auth_user_change",[["admin/auth/user/%(object_id)s/change/",["object_id"]]]],["admin:auth_user_changelist",[["admin/auth/user/",[]]]],["admin:auth_user_delete",[["admin/auth/user/%(object_id)s/delete/",["object_id"]]]],["admin:auth_user_history",[["admin/auth/user/%(object_id)s/history/",["object_id"]]]],["admin:auth_user_password_change",[["admin/auth/user/%(id)s/password/",["id"]]]],["admin:autocomplete",[["admin/autocomplete/",[]]]],["admin:index",[["admin/",[]]]],["admin:jsi18n",[["admin/jsi18n/",[]]]],["admin:login",[["admin/login/",[]]]],["admin:logout",[["admin/logout/",[]]]],["admin:password_change",[["admin/password_change/",[]]]],["admin:password_change_done",[["admin/password_change/done/",[]]]],["admin:shopping_shoppingitem_add",[["admin/shopping/shoppingitem/add/",[]]]],["admin:shopping_shoppingitem_change",[["admin/shopping/shoppingitem/%(object_id)s/change/",["object_id"]]]],["admin:shopping_shoppingitem_changelist",[["admin/shopping/shoppingitem/",[]]]],["admin:shopping_shoppingitem_delete",[["admin/shopping/shoppingitem/%(object_id)s/delete/",["object_id"]]]],["admin:shopping_shoppingitem_history",[["admin/shopping/shoppingitem/%(object_id)s/history/",["object_id"]]]],["admin:shopping_typeurgency_add",[["admin/shopping/typeurgency/add/",[]]]],["admin:shopping_typeurgency_change",[["admin/shopping/typeurgency/%(object_id)s/change/",["object_id"]]]],["admin:shopping_typeurgency_changelist",[["admin/shopping/typeurgency/",[]]]],["admin:shopping_typeurgency_delete",[["admin/shopping/typeurgency/%(object_id)s/delete/",["object_id"]]]],["admin:shopping_typeurgency_history",[["admin/shopping/typeurgency/%(object_id)s/history/",["object_id"]]]],["admin:sites_site_add",[["admin/sites/site/add/",[]]]],["admin:sites_site_change",[["admin/sites/site/%(object_id)s/change/",["object_id"]]]],["admin:sites_site_changelist",[["admin/sites/site/",[]]]],["admin:sites_site_delete",[["admin/sites/site/%(object_id)s/delete/",["object_id"]]]],["admin:sites_site_history",[["admin/sites/site/%(object_id)s/history/",["object_id"]]]],["admin:sleepover_form_sleepoverrequest_add",[["admin/sleepover_form/sleepoverrequest/add/",[]]]],["admin:sleepover_form_sleepoverrequest_change",[["admin/sleepover_form/sleepoverrequest/%(object_id)s/change/",["object_id"]]]],["admin:sleepover_form_sleepoverrequest_changelist",[["admin/sleepover_form/sleepoverrequest/",[]]]],["admin:sleepover_form_sleepoverrequest_delete",[["admin/sleepover_form/sleepoverrequest/%(object_id)s/delete/",["object_id"]]]],["admin:sleepover_form_sleepoverrequest_history",[["admin/sleepover_form/sleepoverrequest/%(object_id)s/history/",["object_id"]]]],["admin:sleepover_form_typecoitusprobability_add",[["admin/sleepover_form/typecoitusprobability/add/",[]]]],["admin:sleepover_form_typecoitusprobability_change",[["admin/sleepover_form/typecoitusprobability/%(object_id)s/change/",["object_id"]]]],["admin:sleepover_form_typecoitusprobability_changelist",[["admin/sleepover_form/typecoitusprobability/",[]]]],["admin:sleepover_form_typecoitusprobability_delete",[["admin/sleepover_form/typecoitusprobability/%(object_id)s/delete/",["object_id"]]]],["admin:sleepover_form_typecoitusprobability_history",[["admin/sleepover_form/typecoitusprobability/%(object_id)s/history/",["object_id"]]]],["admin:view_on_site",[["admin/r/%(content_type_id)s/%(object_id)s/",["content_type_id","object_id"]]]],["index",[["",[]]]],["index_pathed",[["%(resource)s",["resource"]]]],["schema-json",[["swagger/%(format)s/",["format"]]]],["schema-redoc",[["redoc/",[]]]],["schema-swagger-ui",[["swagger/",[]]]],["shopping:list",[["api/shopping/list",[]]]],["sleepover_form:accept_status_update",[["api/sleepover-form/accept-status/%(pk)s",["pk"]]]],["sleepover_form:calendar_list",[["api/sleepover-form/calendar-list",[]]]],["sleepover_form:coitus_probabilities_list",[["api/sleepover-form/coitus-probabilities/list",[]]]],["sleepover_form:create",[["api/sleepover-form/create",[]]]],["sleepover_form:destroy",[["api/sleepover-form/destroy/%(pk)s",["pk"]]]],["sleepover_form:list",[["api/sleepover-form/list",[]]]]],"prefix":"/"};function factory(d){var url_patterns=d.urls;var url_prefix=d.prefix;var Urls={};var self_url_patterns={};var _get_url=function(url_pattern){return function(){var _arguments,index,url,url_arg,url_args,_i,_len,_ref,_ref_list,match_ref,provided_keys,build_kwargs;_arguments=arguments;_ref_list=self_url_patterns[url_pattern];if(arguments.length==1&&typeof(arguments[0])=="object"){var provided_keys_list=Object.keys(arguments[0]);provided_keys={};for(_i=0;_i<provided_keys_list.length;_i++)
provided_keys[provided_keys_list[_i]]=1;match_ref=function(ref)
{var _i;if(ref[1].length!=provided_keys_list.length)
return false;for(_i=0;_i<ref[1].length&&ref[1][_i]in provided_keys;_i++);return _i==ref[1].length;}
build_kwargs=function(keys){return _arguments[0];}}else{match_ref=function(ref)
{return ref[1].length==_arguments.length;}
build_kwargs=function(keys){var kwargs={};for(var i=0;i<keys.length;i++){kwargs[keys[i]]=_arguments[i];}
return kwargs;}}
for(_i=0;_i<_ref_list.length&&!match_ref(_ref_list[_i]);_i++);if(_i==_ref_list.length)
return null;_ref=_ref_list[_i];url=_ref[0],url_args=build_kwargs(_ref[1]);for(url_arg in url_args){var url_arg_value=url_args[url_arg];if(url_arg_value===undefined||url_arg_value===null){url_arg_value='';}else{url_arg_value=url_arg_value.toString();}
url=url.replace("%("+url_arg+")s",url_arg_value);}
return url_prefix+url;};};var name,pattern,url,_i,_len,_ref;for(_i=0,_len=url_patterns.length;_i<_len;_i++){_ref=url_patterns[_i],name=_ref[0],pattern=_ref[1];self_url_patterns[name]=pattern;url=_get_url(name);Urls[name.replace(/[-_]+(.)/g,function(_m,p1){return p1.toUpperCase();})]=url;Urls[name.replace(/-/g,'_')]=url;Urls[name]=url;}
return Urls;}
return data?factory(data):factory;})();