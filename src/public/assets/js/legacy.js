promise.ajaxTimeout=15e3,window.$=function(n){return document.getElementById(n.slice(1))},window.JSON||(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")}}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),String.prototype.supplant||(String.prototype.supplant=function(n){return this.replace(/\{([^{}]*)\}/g,function(e,o){var t=n[o];return"string"==typeof t||"number"==typeof t?t:e})});var notes=function(){var n="",e=!1,o=function(n,e){var o=RegExp("(?:^|\\s)"+e+"(?!\\S)");return null!=n.className.match(o)},t=function(n,e){o(n,e)||(n.className=n.className+" "+e)},r=function(n,e){if(n.className){var o=RegExp("(?:^|\\s)"+e+"(?!\\S)","g");n.className=n.className.replace(o,"")}},a=function(n){r(n,"hidden")},s=function(n){t(n,"hidden")},i=function(n){o(n,"hidden")?a(n):s(n)},c=function(n,e,o){window.addEventListener?n.addEventListener(e,o,!1):"click"==e?n.onclick=o:"submit"==e?n.onsubmit=o:"keyup"==e?n.onkeyup=o:"keydown"==e?n.onkeydown=o:"keypress"==e?n.onkeypress=o:"hashchange"==e&&(n.onhashchange=o)},d=function(n){return n&&n.preventDefault?n.preventDefault():window.event&&(window.event.returnValue=!1),!1},u=function(n,e){null!=n.innerText?n.innerText=e:n.textContent=e},l=function(n){null!=n&&(e||o(50).then(function(e,t){return n.focus(),o(t)}));function o(n){var e=new promise.Promise;return setTimeout(function(){e.done(null,n)},n),e}},p=function(n){e||o(50).then(function(e,t){return n.focus(),o(t)}).then(function(e,o){try{n.setSelectionRange(0,n.value.length)}catch(t){n.select(0,9999999)}});function o(n){var e=new promise.Promise;return setTimeout(function(){e.done(null,n)},n),e}},f=function(){document.body.scrollTop=document.documentElement.scrollTop=0},h=function(n){var e,o=86400,t=3600,r=60,a={};if(n>2*o)a.days=parseInt(n/o),e=i18n_tpl.expires_d;else if(n>2*t){var s=parseInt(n/t);a.hours=s,a.minutes=parseInt((n-s*t)/60),e=i18n_tpl.expires_h_m}else if(n>2*r){var i=parseInt(n/r);a.minutes=i,a.seconds=parseInt(n-i*r),e=i18n_tpl.expires_m_s}else n>=0?a.seconds=parseInt(n):a.seconds=0,e=i18n_tpl.expires_s;return e.supplant(a)},w=function(n,e){if(null!=$(n)){var o=(e-new Date)/1e3;$(n).innerHTML=h(o);var t=1e3;setTimeout(function(){w(n,e)},t=o>172800?36e5:o>7200?6e4:1e3)}},m=null,v=null,k=null;return{init_create:function(){function n(){var n=location.hash.trim();if(n&&!(n.length<2)){var e=!1;n.substring(1).split("&"),s($("#confirmation_option")),e&&o($("#advanced_options"),"hidden")?(a($("#options_on_notice")),a($("#options_on_notice_asterisk"))):(s($("#options_on_notice")),s($("#options_on_notice_asterisk"))),e?a($("#advanced_options_tip")):s($("#advanced_options_tip"))}}c($("#new_note_help_toggle"),"click",function(n){i($("#new_note_help"))}),c($("#created_note_help_toggle"),"click",function(n){i($("#created_note_help")),v&&i($("#created_note_with_pass_help"))}),c($("#advanced_options_show"),"click",function(n){console.log("https://github.com/HideakiAtsuyo"),a($("#advanced_options")),a($("#advanced_options_hide")),s($("#advanced_options_show")),s($("#options_on_notice")),s($("#options_on_notice_asterisk"))}),c($("#advanced_options_hide"),"click",function(n){console.log("https://github.com/HideakiAtsuyo"),s($("#advanced_options")),s($("#advanced_options_hide")),a($("#advanced_options_show")),$("#manual_password").value="",$("#manual_password_confirm").value="",s($("#error_ajax")),s($("#error_connection")),s($("#error_note_is_empty")),s($("#error_password_mismatch"));var e=["very_weak","weak","good","strong","very_strong"];for(var o in e)s($("#"+e[o]+"_manual_password"));location.hash="",s($("#options_on_notice")),s($("#options_on_notice_asterisk")),s($("#advanced_options_tip")),l($("#note_raw"))}),c($("#manual_password"),"keyup",function(n){var e=common.pass_strength($("#manual_password").value),o=["very_weak","weak","good","strong","very_strong"];for(var t in o)s($("#"+o[t]+"_manual_password"));$("#manual_password").value&&a($("#"+e+"_manual_password")),$("#manual_password").value&&$("#manual_password_confirm").value&&$("#manual_password").value!=$("#manual_password_confirm").value?a($("#error_password_mismatch")):s($("#error_password_mismatch"))}),c($("#manual_password_confirm"),"keyup",function(n){$("#manual_password").value&&$("#manual_password_confirm").value&&$("#manual_password").value!=$("#manual_password_confirm").value?a($("#error_password_mismatch")):s($("#error_password_mismatch"))}),$("#note_link_input")&&c($("#select_link"),"click",function(n){p($("#note_link_input"))}),$("#note_link_a")&&c($("#note_link_a"),"click",function(n){d(n)}),$("#note_password_input")&&c($("#select_password"),"click",function(n){p($("#note_password_input"))}),$("#show_password")&&(c($("#show_password"),"click",function(n){a($("#hide_password")),s($("#show_password")),e?u($("#note_password_span"),v):($("#note_password_input").value=v,a($("#select_password")))}),c($("#hide_password"),"click",function(n){s($("#hide_password")),a($("#show_password")),e?u($("#note_password_span"),"*******"):($("#note_password_input").value="*******",s($("#select_password")))})),c($("#encrypt_note"),"click",function(n){console.log("https://github.com/HideakiAtsuyo"),$("#encrypt_note").disabled=!0;var o,t=$("#manual_password").value;v=t,o=""==t?common.make_password():t,s($("#error_ajax")),s($("#error_connection")),s($("#error_note_is_empty"));var r=!1,i=!1,c=$("#note_raw").value;if(""==c&&(a($("#error_note_is_empty")),r=!0),$("#manual_password").value!=$("#manual_password_confirm").value&&(a($("#error_password_mismatch")),i=!0),i&&(a($("#advanced_options")),a($("#advanced_options_hide")),s($("#advanced_options_show")),s($("#advanced_options_tip"))),i||r){$("#encrypt_note").disabled=!1;return}f(),s($("#new_note")),a($("#creating_note"));var d=common.encrypt(c,o);o.length!=common.auto_pass_length&&(o=common.mangle(o)),m={data:d.replace("\n",""),has_manual_pass:""!=t,data_type:"T"},promise.post("/create",m,{"X-Requested-With":"XMLHttpRequest"}).then(function(n,r,i){if(n){a($("#error_connection")),a($("#new_note")),s($("#creating_note")),s($("#created_note"));try{var c=JSON.parse(r),d=c.error;d&&(s($("#error_connection")),a($("#error_ajax")),$("#error_ajax").innerHTML=d)}catch(l){}$("#encrypt_note").disabled=!1;return}var c=JSON.parse(r);if($("#mailto_link").href="mailto:?body="+c.note_link,$("#show_link").href=c.note_link,$("#destroy_link").href=c.note_link,e?($("#note_link_a").href=c.note_link,$("#note_link_a").innerHTML=c.note_link):$("#note_link_input").value=c.note_link,""!=t)e?u($("#note_password_span"),"*******"):$("#note_password_input").value="******",a($("#note_password_block"));else{var f="#"+o;$("#mailto_link").href=$("#mailto_link").href+f,$("#show_link").href=$("#show_link").href+f,$("#destroy_link").href=$("#destroy_link").href+f,e?($("#note_link_a").href+=f,$("#note_link_a").innerHTML+=f):$("#note_link_input").value+=f}a($("#destroy_link")),a($("#info_read_once")),$("#note_raw").value="",$("#manual_password").value="",s($("#new_note")),s($("#creating_note")),a($("#created_note")),e||p($("#note_link_input")),$("#encrypt_note").disabled=!1})}),n(),c(window,"hashchange",function(e){n()}),a($("#content")),s($("#unsupported")),l($("#note_raw"))},init_read:function(o){function t(){var n="",e=!0;if($("#note_password")&&""!=$("#note_password").value)n=$("#note_password").value,e=!1;else if($("#note_link_manual")&&""!=$("#note_link_manual").value){var o=RegExp("#([^#]+)$");n=$("#note_link_manual").value.match(o)[1]}else k&&(n=k);return e&&n.length!=common.auto_pass_length&&(n=common.demangle(n)),n}function r(){try{var n,o=t();if(""==o){a($("#password_form")),a($("#error_password_incorrect")),s($("#ok_content")),l($("#note_password"));return}n=$("#note_contents").value;var r=common.decrypt(n,o);s($("#password_form")),s($("#error_password_incorrect")),a($("#info_destroyed")),a($("#ok_content")),k&&($("#note_link").href+="#"+k,$("#note_link").innerHTML+="#"+k),$("#note_contents").value=r,e?u($("#note_contents_div"),r):(a($("#note_contents")),p($("#note_contents")))}catch(i){a($("#password_form")),a($("#error_password_incorrect")),s($("#ok_content")),l($("#note_password"))}}function d(e,t,i){if(e){a($("#confirm_read_note")),s($("#fetching_note")),a($("#error_connection_read"));try{var c=JSON.parse(t),d=c.error;d&&(s($("#error_connection_read")),a($("#error_ajax_read")),$("#error_ajax_read").innerHTML=d)}catch(u){}$("#confirm_button").disabled=!1,l($("#confirm_button"));return}var c=JSON.parse(t);if(!c.data||""==c.data){location.href="/"+n;return}$("#note_contents").value=c.data,""==k||o?(s($("#fetching_note")),a($("#read_note")),a($("#password_form")),s($("#error_password_incorrect")),s($("#ok_content")),l($("#note_password"))):(s($("#fetching_note")),a($("#read_note")),r(),s($("#error_password_incorrect"))),f()}$("#manual_password_help_toggle")&&c($("#manual_password_help_toggle"),"click",function(n){i($("#manual_password_help"))}),$("#note_password")&&c($("#note_password"),"keypress",function(n){n||(n=window.event),"13"==(n.keyCode||n.which)&&r()}),c($("#decrypt_button"),"click",function(n){r()}),$("#select_text")&&c($("#select_text"),"click",function(n){p($("#note_contents"))}),$("#destroy_button")&&c($("#destroy_button"),"click",function(e){$("#destroy_button").disabled=!0,s($("#error_connection_destroy")),s($("#error_ajax_destroy")),promise.del("/"+n,null,{"X-Requested-With":"XMLHttpRequest"}).then(function(n,e,o){if(n){a($("#error_connection_destroy"));try{var t=JSON.parse(e).error;t&&(s($("#error_connection_destroy")),a($("#error_ajax_destroy")),$("#error_ajax_destroy").innerHTML=t)}catch(r){}$("#destroy_button").disabled=!1;return}s($("#destroy_button")),s($("#info_expires")),a($("#info_destroyed"))})}),location.hash&&(k=location.hash.substring(1),location.hash=""),c($("#confirm_button"),"click",function(e){$("#confirm_button").disabled=!0,s($("#confirm_read_note")),a($("#fetching_note")),s($("#error_connection_read")),s($("#error_ajax_read")),promise.del("/"+n,null,{"X-Requested-With":"XMLHttpRequest"}).then(d)}),o||""!=k?(a($("#confirm_read_note")),l($("#confirm_button"))):(s($("#link_ok")),a($("#error_link_incomplete"))),a($("#content")),s($("#unsupported"))},init_error:function(){a($("#content")),s($("#unsupported"))},set_note_id:function(e){n=e},set_device_type:function(n){e="desktop"!=n},when_ready:function(n){var e=!1;function o(){e||(e=!0,n())}document.addEventListener?(document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",o,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o))}}}();