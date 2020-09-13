// Module Imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
// Modals
import User from "./api/modals/user.js";
// Routes
import signInRoute from "./api/routes/signIn.js";
import registerRoute from "./api/routes/register.js";
import deleteRoute from "./api/routes/delete.js";
import updateRoute from "./api/routes/update.js";
// For ENV varibles
dotenv.config();
//Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = (to, subject) => {
  const msg = {
    to: to,
    from: "heetkv@gamil.com",
    subject,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=Edge">
          <!--<![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {width: 600px;margin: 0 auto;}
        table {border-collapse: collapse;}
        table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
        img {-ms-interpolation-mode: bicubic;}
      </style>
    <![endif]-->
          <style type="text/css">
        body, p, div {
          font-family: trebuchet ms,helvetica,sans-serif;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #0055B8;
          text-decoration: none;
        }
        p { margin: 0; padding: 0; }
        table.wrapper {
          width:100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        @media screen and (max-width:480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .social-icon-column {
            display: inline-block !important;
          }
        }
      </style>
          <!--user entered Head Start-->
        
         <!--End Head user entered-->
        </head>
        <body>
          <center class="wrapper" data-link-color="#0055B8" data-body-style="font-size:14px; font-family:trebuchet ms,helvetica,sans-serif; color:#000000; background-color:#F7F7F7;">
            <div class="webkit">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#F7F7F7">
                <tr>
                  <td valign="top" bgcolor="#F7F7F7" width="100%">
                    <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="100%">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <!--[if mso]>
        <center>
        <table><tr><td width="600">
      <![endif]-->
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                          <tr>
                                            <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
        <tr>
          <td role="module-content">
            <p>This is the preheader text.</p>
          </td>
        </tr>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="4787" data-end-index="4925" data-muid="eBRaDmnRhcZU8CphJrrjCM" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="4932" data-end-index="4936">
            <td style="padding:18px 0px 18px 0px; background-color:#f7f7f7; line-height:NaNpx;" height="100%" valign="top" bgcolor="#f7f7f7" data-start-index="4945" data-end-index="5088"><div><div style="font-family: inherit; text-align: right"><span style="font-size: 10px; font-family: verdana, geneva, sans-serif">Email not displaying correctly? </span><a href="{{weblink}}" data-start-index="5248" data-end-index="5268" target="_blank"><span style="color: #0055b8; font-size: 10px; font-family: verdana, geneva, sans-serif">View it</span></a><span style="font-size: 10px; font-family: verdana, geneva, sans-serif"> in your browser.</span></div><div></div></div></td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:0px 0px 0px 0px; background-color:#f7f7f7; box-sizing:border-box;" bgcolor="#f7f7f7" data-start-index="5511" data-end-index="5847">
          <tbody><tr role="module-content" data-start-index="5854" data-end-index="5880">
            <td height="100%" valign="top" data-start-index="5889" data-end-index="5920"><table width="300" style="width:300px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="6773" data-end-index="6913" data-muid="kTWSASqTSpaVrmQN9wXPiW">
          <tbody><tr data-start-index="6920" data-end-index="6924">
            <td style="font-size:6px; line-height:10px; background-color:#f7f7f7; padding:30px 0px 24px 0px;" valign="top" align="left" data-start-index="6933" data-end-index="7054">
              <img class="max-width" width="182" height="40" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Mercado/Logo.png" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" data-start-index="7065" data-end-index="7324" data-proportionally-constrained="false" data-responsive="false">
            </td>
          </tr>
        </tbody></table></td>
            </tr>
          </tbody>
        </table><table width="300" style="width:300px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="social" align="undefined" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="8046" data-end-index="8204" data-muid="aLejMgSxEBSXrK93jVoTMd">
          <tbody data-start-index="8211" data-end-index="8218">
            <tr data-start-index="8227" data-end-index="8231">
              <td valign="top" style="font-size:6px; line-height:10px; padding:35px 0px 0px 0px;" data-start-index="8242" data-end-index="8324" align="unset">
                <table align="unset" data-start-index="8337" data-end-index="8362">
                  <tbody data-start-index="8377" data-end-index="8384"></tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="8929" data-end-index="9069" data-muid="q474Ek34Y7QfbLCmneBcKz">
          <tbody><tr data-start-index="9076" data-end-index="9080">
            <td style="font-size:6px; line-height:10px; background-color:#FFFFFF; padding:0px 0px 0px 0px;" valign="top" align="left" data-start-index="9089" data-end-index="9208">
              <img class="max-width" width="600" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Mercado/header.jpg" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" data-start-index="9219" data-end-index="9528" height="" data-proportionally-constrained="false" data-responsive="false">
            </td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="9575" data-end-index="9713" data-muid="iKvU5CdNQaZE4RVi5AvEzz" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="9720" data-end-index="9724">
            <td style="padding:51px 20px 51px 20px; background-color:#479521; line-height:NaNpx;" height="100%" valign="top" bgcolor="#479521" data-start-index="9733" data-end-index="9880"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 72px">50% OFF</span></div>
    <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 36px">Lorem ipsum dolor</span></div><div></div></div></td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:30px 20px 0px 20px; box-sizing:border-box;" bgcolor="" data-start-index="10299" data-end-index="10606">
          <tbody><tr role="module-content" data-start-index="10613" data-end-index="10639">
            <td height="100%" valign="top" data-start-index="10648" data-end-index="10679"><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="11525" data-end-index="11665" data-muid="87SDyq4kWrt9V66putWikD">
          <tbody><tr data-start-index="11672" data-end-index="11676">
            <td style="font-size:6px; line-height:10px; background-color:#FFFFFF; padding:0px 0px 0px 0px;" valign="top" align="center" data-start-index="11685" data-end-index="11806">
              <img class="max-width" width="240" height="160" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Mercado/leftimage.jpg" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" data-start-index="11817" data-end-index="12082" data-proportionally-constrained="false" data-responsive="false">
            </td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="12129" data-end-index="12267" data-muid="fqWuyTMwoMZ4DGxXqSf8xV" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="12274" data-end-index="12278">
            <td style="padding:18px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="12287" data-end-index="12430"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Lorem Ipsum Dolor</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #9b9b9b">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$49.99</span></div><div></div></div></td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-start-index="13091" data-end-index="13255" data-muid="iiTixsczU9Z9dTnQytzDXR"><tbody data-start-index="13255" data-end-index="13262"><tr data-start-index="13262" data-end-index="13266"><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:15px 10px 0px 0px; background-color:#ffffff;" data-start-index="13266" data-end-index="13379"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center" data-start-index="13379" data-end-index="13509"><tbody data-start-index="13509" data-end-index="13516"><tr data-start-index="13516" data-end-index="13520"><td align="center" bgcolor="#77C324" class="inner-td" style="-webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; font-size:16px; text-align:center; background-color:inherit;" data-start-index="13520" data-end-index="13707"><a style="background-color:#77C324; height:px; width:221px; font-size:16px; line-height:normal; font-family:Helvetica, Arial, sans-serif; color:#ffffff; padding:10px 18px 10px 18px; text-decoration:none; -webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; border:1px solid #77C324; display:inline-block; border-width:1px; border-style:solid; border-color:#77C324; letter-spacing:0px; font-weight:normal;" href="//" target="_blank" data-start-index="13707" data-end-index="14036">BUY NOW</a></td></tr></tbody></table></td></tr></tbody></table></td>
            </tr>
          </tbody>
        </table><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="14772" data-end-index="14912" data-muid="xHw8cuCqXa4k2Ah9vwLjA">
          <tbody><tr data-start-index="14919" data-end-index="14923">
            <td style="font-size:6px; line-height:10px; background-color:#FFFFFF; padding:0px 0px 0px 0px;" valign="top" align="center" data-start-index="14932" data-end-index="15053">
              <img class="max-width" width="240" height="160" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Mercado/rightimage.jpg" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" data-start-index="15064" data-end-index="15330" data-proportionally-constrained="false" data-responsive="false">
            </td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="15377" data-end-index="15515" data-muid="owmGhLdZeET2HV2r1WKeu9" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="15522" data-end-index="15526">
            <td style="padding:18px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="15535" data-end-index="15678"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Lorem Ipsum Dolor</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #9b9b9b">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$49.99</span></div><div></div></div></td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-start-index="16339" data-end-index="16503" data-muid="wu37bbChMN3RoBtPdQAPta"><tbody data-start-index="16503" data-end-index="16510"><tr data-start-index="16510" data-end-index="16514"><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:15px 10px 0px 0px; background-color:#ffffff;" data-start-index="16514" data-end-index="16627"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center" data-start-index="16627" data-end-index="16757"><tbody data-start-index="16757" data-end-index="16764"><tr data-start-index="16764" data-end-index="16768"><td align="center" bgcolor="#77C324" class="inner-td" style="-webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; font-size:16px; text-align:center; background-color:inherit;" data-start-index="16768" data-end-index="16955"><a style="background-color:#77C324; height:px; width:221px; font-size:16px; line-height:normal; font-family:Helvetica, Arial, sans-serif; color:#ffffff; padding:10px 18px 10px 18px; text-decoration:none; -webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; border:1px solid #77C324; display:inline-block; border-width:1px; border-style:solid; border-color:#77C324; letter-spacing:0px; font-weight:normal;" href="//" target="_blank" data-start-index="16955" data-end-index="17284">BUY NOW</a></td></tr></tbody></table></td></tr></tbody></table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:30px 20px 51px 20px; box-sizing:border-box;" bgcolor="" data-start-index="17630" data-end-index="17938">
          <tbody><tr role="module-content" data-start-index="17945" data-end-index="17971">
            <td height="100%" valign="top" data-start-index="17980" data-end-index="18011"><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="18857" data-end-index="18997" data-muid="oqtsC284jTXX9fviKBqZtE">
          <tbody><tr data-start-index="19004" data-end-index="19008">
            <td style="font-size:6px; line-height:10px; background-color:#FFFFFF; padding:0px 0px 0px 0px;" valign="top" align="center" data-start-index="19017" data-end-index="19138">
              <img class="max-width" width="240" height="160" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Mercado/leftimage.jpg" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" data-start-index="19149" data-end-index="19414" data-proportionally-constrained="false" data-responsive="false">
            </td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="19461" data-end-index="19599" data-muid="ewQKLBVYDrgSB78hQySmdG" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="19606" data-end-index="19610">
            <td style="padding:18px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="19619" data-end-index="19762"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Lorem Ipsum Dolor</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #9b9b9b">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$49.99</span></div><div></div></div></td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-start-index="20423" data-end-index="20587" data-muid="j8QRNdhMon1MUHVhKEeEcN"><tbody data-start-index="20587" data-end-index="20594"><tr data-start-index="20594" data-end-index="20598"><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:15px 10px 0px 0px; background-color:#ffffff;" data-start-index="20598" data-end-index="20711"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center" data-start-index="20711" data-end-index="20841"><tbody data-start-index="20841" data-end-index="20848"><tr data-start-index="20848" data-end-index="20852"><td align="center" bgcolor="#77C324" class="inner-td" style="-webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; font-size:16px; text-align:center; background-color:inherit;" data-start-index="20852" data-end-index="21039"><a style="background-color:#77C324; height:px; width:221px; font-size:16px; line-height:normal; font-family:Helvetica, Arial, sans-serif; color:#ffffff; padding:10px 18px 10px 18px; text-decoration:none; -webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; border:1px solid #77C324; display:inline-block; border-width:1px; border-style:solid; border-color:#77C324; letter-spacing:0px; font-weight:normal;" href="//" target="_blank" data-start-index="21039" data-end-index="21368">BUY NOW</a></td></tr></tbody></table></td></tr></tbody></table></td>
            </tr>
          </tbody>
        </table><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="22104" data-end-index="22244" data-muid="ngY4PZr3jg3Wtvi3MpETi9">
          <tbody><tr data-start-index="22251" data-end-index="22255">
            <td style="font-size:6px; line-height:10px; background-color:#FFFFFF; padding:0px 0px 0px 0px;" valign="top" align="center" data-start-index="22264" data-end-index="22385">
              <img class="max-width" width="240" height="160" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Mercado/rightimage.jpg" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" data-start-index="22396" data-end-index="22662" data-proportionally-constrained="false" data-responsive="false">
            </td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="22709" data-end-index="22847" data-muid="ivNKUfYbwN9MouzhB1xjPn" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="22854" data-end-index="22858">
            <td style="padding:18px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="22867" data-end-index="23010"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Lorem Ipsum Dolor</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #9b9b9b">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$49.99</span></div><div></div></div></td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-start-index="23671" data-end-index="23835" data-muid="cBh3zhHpCuJQgETfzgiccu"><tbody data-start-index="23835" data-end-index="23842"><tr data-start-index="23842" data-end-index="23846"><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:15px 10px 0px 0px; background-color:#ffffff;" data-start-index="23846" data-end-index="23959"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center" data-start-index="23959" data-end-index="24089"><tbody data-start-index="24089" data-end-index="24096"><tr data-start-index="24096" data-end-index="24100"><td align="center" bgcolor="#77C324" class="inner-td" style="-webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; font-size:16px; text-align:center; background-color:inherit;" data-start-index="24100" data-end-index="24287"><a style="background-color:#77C324; height:px; width:221px; font-size:16px; line-height:normal; font-family:Helvetica, Arial, sans-serif; color:#ffffff; padding:10px 18px 10px 18px; text-decoration:none; -webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; border:1px solid #77C324; display:inline-block; border-width:1px; border-style:solid; border-color:#77C324; letter-spacing:0px; font-weight:normal;" href="//" target="_blank" data-start-index="24287" data-end-index="24616">BUY NOW</a></td></tr></tbody></table></td></tr></tbody></table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="24962" data-end-index="25179" data-muid="6dKhMuUDTxkUvLGAvkQ5mr">
          <tbody><tr data-start-index="25186" data-end-index="25190">
            <td style="padding:0px 0px 2px 0px;" role="module-content" bgcolor="#86B13B" data-start-index="25199" data-end-index="25300">
            </td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:0px 30px 35px 30px; box-sizing:border-box;" bgcolor="" data-start-index="25347" data-end-index="25654">
          <tbody><tr role="module-content" data-start-index="25661" data-end-index="25687">
            <td height="100%" valign="top" data-start-index="25696" data-end-index="25727"><table width="180" style="width:180px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="26573" data-end-index="26711" data-muid="mW7XaCQGNas2HW7VbUWypp" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="26718" data-end-index="26722">
            <td style="padding:51px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="26731" data-end-index="26875"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #77c324; font-size: 22px">Category</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Running Shoes</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Sneakers</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Boots</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Loafers</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Flats</span></div><div></div></div></td>
          </tr>
        </tbody></table></td>
            </tr>
          </tbody>
        </table><table width="180" style="width:180px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="28333" data-end-index="28471" data-muid="e7JVRd6bAFizordYVEA5Wy" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="28478" data-end-index="28482">
            <td style="padding:51px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="28491" data-end-index="28635"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #77c324; font-size: 22px">Category</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Adidas</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Puma</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Fila</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Reebok</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Woodland</span></div><div></div></div></td>
          </tr>
        </tbody></table></td>
            </tr>
          </tbody>
        </table><table width="180" style="width:180px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="30083" data-end-index="30221" data-muid="mXsfZsE3EubDashCr2q9aY" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="30228" data-end-index="30232">
            <td style="padding:51px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="30241" data-end-index="30385"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #77c324; font-size: 22px">Category</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Formals</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Casual Shoes</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Sport Sandals</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px">Slippers &amp; Flip Flops</span></div><div></div></div></td>
          </tr>
        </tbody></table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="31375" data-end-index="31592" data-muid="q8yihTWW5RcBnUUSr8f491">
          <tbody><tr data-start-index="31599" data-end-index="31603">
            <td style="padding:0px 0px 2px 0px;" role="module-content" bgcolor="#86B13B" data-start-index="31612" data-end-index="31713">
            </td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:35px 5px 80px 5px; background-color:#F7F7F7; box-sizing:border-box;" bgcolor="#F7F7F7" data-start-index="31760" data-end-index="32098">
          <tbody><tr role="module-content" data-start-index="32105" data-end-index="32131">
            <td height="100%" valign="top" data-start-index="32140" data-end-index="32171"><table width="295" style="width:295px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="33024" data-end-index="33162" data-muid="4B9t7Htois9ZYnvD3jmqzm" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="33169" data-end-index="33173">
            <td style="padding:18px 0px 18px 0px; background-color:#F7F7F7; line-height:NaNpx;" height="100%" valign="top" bgcolor="#F7F7F7" data-start-index="33182" data-end-index="33325"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif">Lorem ipsum dolor sit ame, consectetur adipisicing elit, sed do eiusmod tempor.</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div><div></div></div></td>
          </tr>
        </tbody></table></td>
            </tr>
          </tbody>
        </table><table width="295" style="width:295px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="34875" data-end-index="35013" data-muid="2RC6fJy3N4BFUJLHgwHeGb" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="35020" data-end-index="35024">
            <td style="padding:18px 0px 18px 0px; background-color:#F7F7F7; line-height:NaNpx;" height="100%" valign="top" bgcolor="#F7F7F7" data-start-index="35033" data-end-index="35176"><div><div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif">{{Sender_Name}}</span></div>
    <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif">{{Sender_Address}}</span></div>
    <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif">{{Sender_City}}, {{Sender_State}} {{Sender_Zip}}</span></div>
    <div style="font-family: inherit; text-align: right">&nbsp;</div>
    <div style="font-family: inherit; text-align: right"><a href="{{{unsubscribe}}}" data-start-index="36425" data-end-index="36449" target="_blank"><span style="color: #0055b8; font-family: arial, helvetica, sans-serif">Unsubscribe</span></a><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif"> | </span><a href="{{{unsubscribe_preferences}}}" data-start-index="36539" data-end-index="36575" target="_blank"><span style="color: #0055b8; font-family: arial, helvetica, sans-serif">Update Preferences</span></a></div><div></div></div></td>
          </tr>
        </tbody></table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody></table></td>
                                          </tr>
                                        </table>
                                        <!--[if mso]>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                                <![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </center>
        </body>
      </html>`,
  };
  sgMail.send(msg);
};
// Connecting to Mongodb Database called torism
const connect = () => {
  mongoose.set("useCreateIndex", true);
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connect();
// UserSchema

app.get("/", (req, res) => {
  res.json("Welcome to Server");
});
// SignIn Route
app.post("/signin", async (req, res) => {
  signInRoute(req, res, User, bcrypt, sendEmail);
});
// Register Route
app.post("/register", (req, res) => {
  registerRoute(req, res, User, bcrypt, sendEmail);
});
// Delete Route
app.post("/delete", (req, res) => {
  deleteRoute(req, res, User);
});
//Update Route
app.put("/update/:item", (req, res) => {
  updateRoute(req, res, User, bcrypt, sendEmail);
});
const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);
