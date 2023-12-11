<template>
  <el-dialog
    v-model="dialogVisible"
    :width="styleWidth"
    :before-close="handleClose"
  >
    <div v-if="type === 1" style="margin:14px;" class="lh-base">
      <p style="text-indent:2em">更新日期：2023年6月13日</p>
      <p style="text-indent:2em">生效日期：2023年6月13日</p>

      <p style="text-indent:2em">
        本软件平台由HISEVEN
        SDN.BHD.公司（以下简称“HISEVEN”）开发和拥有，在此特别提醒您（用户）在成为注册用户之前，请认真阅读本《用户协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权使用本协议所涉服务。您的购买、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。本协议约定HISEVEN与用户之间关于本软件平台服务（以下简称“服务”）的权利义务。“用户”是指购买、使用本服务的个人。本协议可由HISEVEN随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在官网查阅最新版协议条款。在HISEVEN修改协议条款后，如果用户不接受修改后的条款，请立即停止使用HISEVEN提供的服务，用户继续使用HISEVEN提供的服务将被视为接受修改后的协议。
      </p>
      <p style="text-indent:2em">
        本产品仅支持境外网络环境下使用，中国地区无法使用，且不支持境内任何形式的翻墙行为。产品提供免费试用服务，购买前请联系客服咨询业务事宜。
      </p>

      <h3>一、账户条款</h3>
      <p style="text-indent:2em">
        1.用户必须年满18岁才能注册HISEVEN账户，或者年龄须足以在您所在的地方签订有约束力的合同。如果用户未满18岁，则未经父母或监护人的同意，不能使用本软件平台。
      </p>
      <p style="text-indent:2em">
        2.用户需要注册方可使用本软件平台，选择帐户名称并设置密码。用户的信息将根据可适用的数据保护法以及我们的隐私政策进行收集和披露。所有用户在注册HISEVEN的网站或服务时都必须提供真实和准确的信息，请勿使用无效或他人的电子邮件，因为这会降低帐户安全性。
      </p>
      <p style="text-indent:2em">
        3.HISEVEN保留验证所有用户信息并拒绝任何用户的权利。用户应对帐户中的所有活动负责，并对密码保密。用户同意将任何未经授权使用您的帐户或任何其他违反安全性的行为立即通知我们。对于他人在用户知情或不知情的情况下使用用户的密码或帐户给用户造成的任何损失，HISEVEN不承担任何责任。如果发现有人未经您的许可使用了您的帐户，则应将其报告给support@hiseven.com。
      </p>
      <p style="text-indent:2em">
        4.用户不得将HISEVEN软件用于任何非法或未经授权的目的。用户在使用软件时，不得违反所在司法管辖区的任何法律及其法律规定。
      </p>
      <p style="text-indent:2em">
        5．本软件平台的所有权归HISEVEN所有，用户完成购买并开通后，获得本软件平台的使用权，该使用权仅属于初始购买人，禁止赠与、借用、租用、转让或售卖。HISEVEN因经营需要，有权回收用户的本软件平台。
      </p>
      <p style="text-indent:2em">
        6．用户可以更改、删除本软件平台账户上的个人资料、注册信息及传送内容等，但需注意，删除有关信息的同时也会删除用户储存在系统中的文字和图片。用户需承担该风险。
      </p>
      <p style="text-indent:2em">
        7．用户应遵守本协议的各项条款，正确、适当地使用本服务，如因用户违反本协议中的任何条款，HISEVEN在通知用户后有权依据协议中断或终止对违约用户提供服务。同时，HISEVEN保留在任何时候收回本软件平台、户名的权利。
      </p>
      <h3>二、使用规则</h3>
      <p style="text-indent:2em">
        1．用户理解并同意，本软件平台仅为用户提供网络代理服务功能，用户必须为自己使用下的一切行为负责，包括用户所传送的任何内容以及由此产生的任何后果。用户应对本软件平台及本服务中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的正确性、完整性或实用性的依赖而产生的风险。HISEVEN无法且不会对因用户行为而导致的任何损失或损害承担责任。如果用户发现任何人违反本协议约定或以其他不当的方式使用本服务，请立即向HISEVEN举报或投诉，HISEVEN将依本协议约定进行处理。
      </p>
      <p style="text-indent:2em">
        2．用户理解并同意，因业务发展需要，HISEVEN保留单方面对本服务的全部或部分服务内容变更、暂停、终止或撤销的权利，用户需承担此风险。
      </p>
      <p style="text-indent:2em">
        3.
        您对本服务条款及修改有任何异议，可自动放弃其资格，HISEVEN不支持因本协议中第七条款：不可抗力及其他免责事由发起的任何退费申请。
      </p>
      <p style="text-indent:2em">4．用户不得利用本软件平台进行如下行为：</p>
      <p style="text-indent:4em">
        (1) 提交、发布虚假信息，或盗用他人头像或资料，冒充、利用他人名义的；
      </p>
      <p style="text-indent:4em">
        (2) 强制其他用户关注、点击链接页面或分享信息的；
      </p>
      <p style="text-indent:4em">(3) 虚构事实、隐瞒真相以误导、欺骗他人的；</p>
      <p style="text-indent:4em">
        (4) 利用技术手段批量建立虚构事实、隐瞒真相以误导、欺骗他人的；
      </p>
      <p style="text-indent:4em">(5) 利用本软件平台从事任何违法犯罪活动的；</p>
      <p style="text-indent:4em">
        (6)
        制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；
      </p>
      <p style="text-indent:4em">
        (7)
        其他违反法律法规规定、侵犯其他用户合法权益、干扰本软件平台正常运营或HISEVEN未明示授权的行为。
      </p>
      <p style="text-indent:2em">
        5．用户须对利用本软件平台传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与本软件平台无关。如因此给HISEVEN或第三方造成损害的，用户应当依法予以赔偿。
      </p>
      <p style="text-indent:2em">
        6．HISEVEN提供的服务中可能包括广告，用户同意在使用过程中显示HISEVEN和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对依该广告信息进行的交易负责，对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，HISEVEN不承担任何责任。
      </p>
      <h3>三、费用条款</h3>
      <p style="text-indent:2em">
        1.请访问本软件平台的付款政策页面，以了解本软件平台的所有服务的价格和最新优惠，某些功能只能付费使用。如果用户同意本软件平台的付款政策并订购相关功能，则承诺支付相关功能的费用。所有服务的价格（包括但不限于服务的每月订购计划费用）可能会发生变化。价格更改将发布到http://ip007.cc/或软件本身。
      </p>
      <p style="text-indent:2em">
        2.用户应根据自身需求，选择本服务中的具体项目，选择一经做出，即对用户有约束力。本服务中可能包括收费服务、免费服务，具体按本软件平台对外公布的信息为准。
      </p>
      <p style="text-indent:2em">
        3.免费服务的使用可能需要满足一定的条件，具体条件以本软件平台网站公布的条件为准。对于免费服务，HISEVEN有权根据实际情况，对免费服务的领取时间、具体服务内容、服务期限及服务标准等进行单方变更，对此您无异议，并接受前述的变更，为此，HISEVEN无需向您承担任何责任。
      </p>
      <p style="text-indent:2em">
        4.HISEVEN保留随时或不定期更改或终止本服务（或其任何部分）的权利。HISEVEN无须就对本服务的任何修改、价格变动、暂停或终止对您或任何第三方承担任何责任。
      </p>
      <h3>四、退款政策</h3>
      <p style="text-indent:2em">
        HISEVEN提供预先充值服务，充值成功到此平台的账户余额后，不提供任何形式以及理由余额退款服务。请注意，若购买的产品或服务产生的纠纷退款，所有款项均会退回此平台中该账户的余额，
        您可使用余额继续购买平台内的其他服务和产品。
      </p>
      <h3>五、隐私保护</h3>
      <p style="text-indent:2em">
        1.HISEVEN重视用户的隐私，用户的隐私权政策已纳入本协议，请查看HISEVEN的隐私政策，以便您了解我们的隐私惯例。HISEVEN收集的所有信息均受隐私政策的约束，通过使用网站或服务，同意HISEVEN根据隐私政策对用户的信息采取的所有措施。
      </p>
      <p style="text-indent:2em">
        2.用户同意对机密信息保密，不得将其用于履行本协议以外的目的，也不得向第三方披露所知道的本软件平台服务机密信息。用户向HISEVEN提供的有关本软件平台的任何建议、信息、想法或反馈，包括但不限于在使用软件或相关服务时发现的任何错误的报告文档（统称“反馈”），均将归公司所有。用户同意在全球范围内将“反馈”中的所有权利，包括但不限于所有权和利益以及相关的知识产权无偿转让给HISEVEN，并同意协助我们完善和行使这些权利。
      </p>
      <h3>六、产品标识及版权</h3>
      <p style="text-indent:2em">
        1．除本服务中涉及广告的知识产权由相应广告商享有外，HISEVEN在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表等）的知识产权均归HISEVEN所有，但用户在使用本服务前对自己发布的内容已合法取得知识产权的除外。
      </p>
      <p style="text-indent:2em">
        2．除另有特别声明外，HISEVEN提供本服务时所依托软件的著作权、专利权及其他知识产权均归HISEVEN所有。
      </p>
      <p style="text-indent:2em">
        3．HISEVEN在本服务中所涉及的图形、文字或其组成，以及其他HISEVEN标志及产品、服务名称（以下统称“HISEVEN标识”），其著作权或商标权归HISEVEN所有。未经HISEVEN事先书面同意，用户不得将HISEVEN标识以任何方式展示或使用或作其他处理，也不得向他人表明用户有权展示、使用、或其他有权处理HISEVEN标识的行为。
      </p>
      <p style="text-indent:2em">
        4．上述及其他任何HISEVEN或相关广告商依法拥有的知识产权均受到法律保护，未经HISEVEN或相关广告商书面许可，用户不得以任何形式进行使用或创造相关衍生作品。
      </p>
      <h3>七、不可抗力及免责声明</h3>
      <p style="text-indent:2em">
        1．用户理解并确认，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，HISEVEN将努力在第一时间与相关单位配合，及时进行修复，但是由此给用户或第三方造成的损失，HISEVEN及合作单位在法律允许的范围内免责。
      </p>
      <p style="text-indent:2em">
        2．本服务同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰，如他人利用用户的资料，造成现实生活中的骚扰；用户下载安装的其它软件或访问的其他网站中含有“木马”病毒，威胁到用户的计算机信息和数据的安全，继而影响本服务的正常使用等等。用户应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。
      </p>
      <p style="text-indent:2em">
        3．用户理解并确认，本服务存在因不可抗力、计算机病毒或黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足用户要求的风险，因此导致的用户或第三方任何损失，HISEVEN不承担任何责任。
      </p>
      <p style="text-indent:2em">
        4．用户理解并确认，HISEVEN需要定期或不定期地对本软件平台平台或相关的设备进行检修或者维护，如因此类情况而造成服务在合理时间内的中断，HISEVEN无需为此承担任何责任。
      </p>
      <p style="text-indent:2em">
        5．HISEVEN依据法律法规、本协议约定获得处理违法违规或违约内容的权利，该权利不构成HISEVEN的义务或承诺，HISEVEN不能保证及时发现违法违规或违约行为或进行相应处理。
      </p>
      <p style="text-indent:2em">
        6．用户理解并确认，对于HISEVEN向用户提供的下列产品或者服务的质量缺陷及其引发的任何损失，HISEVEN无需承担任何责任：
      </p>
      <p style="text-indent:4em">(1) HISEVEN向用户免费提供的服务；</p>
      <p style="text-indent:4em">(2) HISEVEN向用户赠送的任何产品或者服务。</p>
      <p style="text-indent:2em">
        7．在任何情况下，HISEVEN均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害，包括因用户使用本软件平台而遭受的损失，承担责任（即使HISEVEN已被告知该等损失的可能性亦然）。尽管本协议中可能含有相悖的规定，HISEVEN对用户承担的全部责任，无论因何原因或何种行为方式，始终不超过用户因使用HISEVEN提供的服务而支付给HISEVEN的费用(如有)。
      </p>
      <h3>八、服务的变更、中断、终止</h3>
      <p style="text-indent:2em">
        1．鉴于网络服务的特殊性，用户同意HISEVEN有权随时变更、中断或终止部分或全部的服务（包括收费服务）。HISEVEN变更、中断或终止的服务，HISEVEN应当在变更、中断或终止之前通知用户，并应向受影响的用户提供等值的替代性的服务；如用户不愿意接受替代性的服务，则双方根据实际情况本着友好协商的原则，具体商议合理的解决方案。
      </p>
      <p style="text-indent:2em">
        2．如发生下列任何一种情形，HISEVEN有权变更、中断或终止向用户提供的免费服务或收费服务，而无需对用户或任何第三方承担任何责任：
      </p>
      <p style="text-indent:4em">
        (1)
        根据法律规定用户应提交真实信息，而用户提供的个人资料不真实又未能提供合理证明；
      </p>
      <p style="text-indent:4em">(2) 用户违反相关法律法规或本协议的约定；</p>
      <p style="text-indent:4em">(3) 按照法律规定或有权机关的要求；</p>
      <p style="text-indent:4em">(4) 出于安全的原因或其他必要的情形；</p>
      <h3>九、其他条款</h3>
      <p style="text-indent:2em">
        1．HISEVEN郑重提醒用户注意本协议中免除HISEVEN责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险。未成年人应在法定监护人的陪同下阅读本协议。
      </p>
      <p style="text-indent:2em">
        2．用户和HISEVEN之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户同意将纠纷或争议提交HISEVEN住所地有管辖权的法院管辖。
      </p>
      <p style="text-indent:2em">
        3．本协议的任何条款无论因何种原因无效或不具可执行性，其余条款仍有效，对双方具有约束力。
      </p>
    </div>
    <div v-if="type === 1" style="margin:14px;" class="lh-base">
      <p style="text-indent:2em">Updated Date: June 13, 2023</p>

      <p style="text-indent:2em">Effective Date: June 13, 2023</p>

      <p style="text-indent:2em">
        This software platform is developed and owned by HISEVEN SDN.BHD.
        (hereinafter referred to as "HISEVEN"). Before becoming a registered
        user, please read this "User Agreement" (hereinafter referred to as the
        "Agreement") carefully to ensure that you fully understand the terms and
        conditions of this Agreement. Please read and choose to accept or
        decline this Agreement carefully. Unless you accept all the terms of
        this Agreement, you have no right to use the services covered by this
        Agreement. Your purchase, use, and other behaviors will be deemed as
        acceptance of this Agreement and agreement to be bound by all the terms
        of this Agreement. This Agreement stipulates the rights and obligations
        between HISEVEN and users regarding the software platform services
        (hereinafter referred to as "Services") of this software platform.
        "User" refers to individuals who purchase and use this service. HISEVEN
        reserves the right to update this Agreement at any time. Once the
        updated terms of the Agreement are announced, they will replace the
        original terms of the Agreement without further notice. Users can check
        the latest version of the terms of the Agreement on the official
        website. After HISEVEN modifies the terms of the Agreement, if the user
        does not accept the modified terms, please immediately stop using the
        services provided by HISEVEN. By continuing to use the services provided
        by HISEVEN, the user will be deemed to have accepted the modified
        Agreement.
      </p>

      <p style="text-indent:2em">
        This product can only be used in overseas network environments and
        cannot be used in mainland China. It does not support any form of
        circumvention within the country. The product provides a free trial
        service. Please contact customer service for inquiries before making a
        purchase.
      </p>

      <h3>I: Account Terms</h3>

      <p style="text-indent:2em">
        1. Users must be at least 18 years old to register for a HISEVEN account
        or be of legal age to enter into a binding contract in your
        jurisdiction. If you are under 18 years old, you cannot use this
        software platform without the consent of your parents or legal guardian.
      </p>

      <p style="text-indent:2em">
        2. Users need to register to use this software platform, choose an
        account name, and set a password. Your information will be collected and
        disclosed in accordance with applicable data protection laws and our
        privacy policy. All users must provide true and accurate information
        when registering on the HISEVEN website or using the services. Do not
        use invalid or other people's email addresses as this will compromise
        the security of your account.
      </p>

      <p style="text-indent:2em">
        3. HISEVEN reserves the right to verify all user information and reject
        any user. Users are responsible for all activities in their accounts and
        must keep their passwords confidential. Users agree to immediately
        notify us of any unauthorized use of your account or any other security
        breaches. HISEVEN shall not be liable for any loss caused to the user by
        the unauthorized use of their password or account by others, with or
        without the user's knowledge. If you find that someone has used your
        account without your permission, you should report it to
        support@hiseven.com.
      </p>

      <p style="text-indent:2em">
        4. Users shall not use the HISEVEN software for any illegal or
        unauthorized purposes. When using the software, users shall not violate
        any laws and regulations of their jurisdiction.
      </p>

      <p style="text-indent:2em">
        5. The ownership of this software platform belongs to HISEVEN. After the
        user completes the purchase and activation, they obtain the right to use
        this software platform. This right is only for the initial purchaser and
        prohibits gifting, borrowing, renting, transferring, or selling. HISEVEN
        has the right to reclaim the user's access to this software platform for
        operational purposes.
      </p>

      <p style="text-indent:2em">
        6. Users may modify or delete personal information, registration
        information, and transmitted content on their software platform account.
        However, it should be noted that deleting relevant information will also
        delete the text and images stored by the user in the system. Users
        should bear this risk.
      </p>

      <p style="text-indent:2em">
        7. Users should comply with the terms of this agreement and use this
        service correctly and appropriately. If a user violates any terms of
        this agreement, HISEVEN has the right to interrupt or terminate the
        service to the defaulting user after notifying the user. At the same
        time, HISEVEN reserves the right to revoke this software platform and
        account name at any time.
      </p>

      <h3>Ⅱ: Rules of Use</h3>

      <p style="text-indent:2em">
        1. Users understand and agree that this software platform only provides
        users with network proxy services. Users are responsible for all their
        actions, including any content transmitted by the user and the resulting
        consequences. Users should independently judge the content in this
        software platform and this service and bear all risks arising from the
        use of the content, including risks arising from the accuracy,
        completeness, or usefulness of the content. HISEVEN cannot and will not
        be liable for any losses or damages caused by user actions. If a user
        finds anyone violating the provisions of this agreement or using this
        service inappropriately, they should immediately report or complain to
        HISEVEN. HISEVEN will handle it in accordance with the provisions of
        this agreement.
      </p>

      <p style="text-indent:2em">
        2. Users understand and agree that HISEVEN reserves the unilateral right
        to change, suspend, terminate, or revoke all or part of the service
        content of this service due to business development needs. Users should
        bear this risk.
      </p>

      <p style="text-indent:2em">
        3. If you have any objections to these terms of service and
        modifications, you may automatically waive your eligibility. HISEVEN
        does not support any refund applications initiated based on the seventh
        clause of this agreement: force majeure and other disclaimer reasons.
      </p>

      <p style="text-indent:2em">
        4. Users are not allowed to engage in the following behaviors on this
        software platform:
      </p>

      <p style="text-indent:4em">
        (1) Submitting or posting false information, or impersonating or using
        other people's avatars or information;
      </p>

      <p style="text-indent:4em">
        (2) Forcing other users to follow, click on links or share information;
      </p>

      <p style="text-indent:4em">
        (3) Fabricating facts or concealing the truth to mislead or deceive
        others;
      </p>

      <p style="text-indent:4em">
        (4) Using technical means to create fictional facts, conceal the truth,
        mislead, or deceive others;
      </p>

      <p style="text-indent:4em">
        (5) Engaging in any illegal activities using this software platform;
      </p>

      <p style="text-indent:4em">
        (6) Creating, publishing methods or tools related to the above
        behaviors, or operating or spreading such methods or tools, regardless
        of whether these actions are for commercial purposes;
      </p>
      <p style="text-indent:4em">
        (7) Other acts that violate laws and regulations, infringe on the
        legitimate rights and interests of other users, interfere with the
        normal operation of this software platform, or are not expressly
        authorized by HISEVEN.
      </p>
      <p style="text-indent:2em">
        5. Users are fully responsible for the authenticity, legality,
        harmlessness, accuracy, and effectiveness of the information transmitted
        through this software platform. Any legal liability related to the
        information disseminated by the user shall be borne by the user alone
        and shall have nothing to do with this software platform. If this causes
        damage to HISEVEN or a third party, the user shall compensate according
        to law.
      </p>
      <p style="text-indent:2em">
        6. The services provided by HISEVEN may include advertisements, and
        users agree to display advertisements provided by HISEVEN and
        third-party suppliers and partners during use. Except as expressly
        provided by laws and regulations, users shall be responsible for any
        transactions made based on such advertising information. HISEVEN shall
        not be liable for any losses or damages suffered by users due to such
        transactions or the content provided by the aforementioned advertisers.
      </p>
      <h3>III. Fee Terms</h3>
      <p style="text-indent:2em">
        1. Please visit the payment policy page of this software platform to
        learn about the prices and latest promotions of all services provided by
        this software platform. Some functions can only be used after payment.
        If the user agrees with the payment policy of this software platform and
        orders relevant functions, they promise to pay the relevant fees for
        such functions. The prices of all services (including but not limited to
        monthly subscription plan fees) may change. Price changes will be posted
        on http://ip007.cc/ or the software itself.
      </p>
      <p style="text-indent:2em">
        2. Users should choose specific items in this service according to their
        own needs. Once chosen, they are binding on the user. This service may
        include paid services and free services, and specific information
        published by this software platform shall prevail.
      </p>
      <p style="text-indent:2em">
        3. The use of free services may be subject to certain conditions, and
        specific conditions shall be subject to the information published on the
        website of this software platform. For free services, HISEVEN has the
        right to unilaterally change the time of receiving free services,
        specific service content, service period, service standards, etc.
        according to actual situations. You have no objection to such changes
        and accept them. Therefore, HISEVEN does not need to bear any
        responsibility to you.
      </p>
      <p style="text-indent:2em">
        4. HISEVEN reserves the right to change or terminate this service (or
        any part thereof) at any time or irregularly. HISEVEN shall not be
        liable to you or any third party for any modification, price change,
        suspension or termination of this service.
      </p>
      <h3>IV. Refund Policy</h3>
      <p style="text-indent:2em">
        HISEVEN provides prepaid services. After the recharge is successful and
        the balance is credited to the account on this platform, no refund
        service of any form or reason will be provided. Please note that if a
        dispute refund arises from a purchased product or service, all funds
        will be refunded to the balance of that account on this platform, which
        can be used to continue purchasing other services and products on the
        platform.
      </p>

      <h3>V.Privacy Protection</h3>

      <p style="text-indent:2em">
        1. HISEVEN values users' privacy and the privacy policy is included in
        this agreement. Please review HISEVEN's privacy policy to understand our
        privacy practices. All information collected by HISEVEN is subject to
        the privacy policy, and by using the website or service, you agree to
        all measures taken by HISEVEN regarding user information according to
        the privacy policy.
      </p>
      <p style="text-indent:2em">
        2. Users agree to keep confidential information confidential and not use
        it for purposes other than fulfilling this agreement. Users also agree
        not to disclose any confidential information about the software platform
        service to third parties. Any suggestions, information, ideas, or
        feedback provided by users to HISEVEN regarding the software platform,
        including but not limited to reports of any errors discovered while
        using the software or related services (collectively referred to as
        "feedback"), shall be owned by the company. Users agree to transfer all
        rights in the "feedback" worldwide, including but not limited to
        ownership and interests as well as related intellectual property rights,
        to HISEVEN free of charge and agree to assist us in perfecting and
        exercising these rights.
      </p>
      <h3>Ⅵ. Product Identification and Copyright</h3>
      <p style="text-indent:2em">
        1. Except for the intellectual property rights of advertisements
        involved in this service, which are owned by the corresponding
        advertisers, the intellectual property rights of the content provided by
        HISEVEN in this service (including but not limited to web pages, text,
        images, audio, video, graphics, etc.) all belong to HISEVEN. However,
        this does not apply to the content that users have legally obtained the
        intellectual property rights to before using this service.
      </p>
      <p style="text-indent:2em">
        2. Unless otherwise stated, the copyright, patent rights, and other
        intellectual property rights of the software relied on by HISEVEN when
        providing this service all belong to HISEVEN.
      </p>
      <p style="text-indent:2em">
        3. The graphics, text or their composition, and other HISEVEN logos,
        product and service names (collectively referred to as "HISEVEN marks")
        involved in this service are copyrighted or trademarked by HISEVEN.
        Without prior written consent from HISEVEN, users are not allowed to
        display or use HISEVEN marks in any way or make any other modifications.
        Users are also not allowed to indicate that they have the right to
        display, use, or modify HISEVEN marks in any way.
      </p>
      <p style="text-indent:2em">
        4. All intellectual property rights owned by HISEVEN or related
        advertisers under the law are protected by law. Without written
        permission from HISEVEN or related advertisers, users are not allowed to
        use or create related derivative works in any form.
      </p>
      <h3>Ⅶ.Force Majeure and Disclaimer</h3>
      <p style="text-indent:2em">
        1. Users understand and acknowledge that during the use of this service,
        they may encounter risks such as force majeure that may cause
        interruptions to this service. Force majeure refers to objective events
        that cannot be foreseen, overcome, avoided and have a significant impact
        on one or both parties. This includes but is not limited to natural
        disasters such as floods, earthquakes, epidemics, and storms, as well as
        social events such as wars, riots, and government actions. In the event
        of the above situation, HISEVEN will cooperate with relevant units to
        repair it in a timely manner, but HISEVEN and its cooperative units
        shall be exempt from liability for any losses incurred by users or third
        parties within the scope permitted by law.
      </p>
      <p style="text-indent:2em">
        2. This service, like most internet services, may be affected by various
        security issues due to factors such as user behavior, network service
        quality, and social environment. For example, others may use the user's
        information to cause harassment in real life; other software downloaded
        and installed by the user or websites visited may contain "Trojan horse"
        viruses, threatening the security of the user's computer information and
        data, and thus affecting the normal use of this service. Users should
        strengthen their awareness of information security and user data
        protection, pay attention to password protection, in order to avoid
        losses and harassment.
      </p>
      <p style="text-indent:2em">
        3. Users understand and confirm that this service may be interrupted or
        unable to meet user requirements due to force majeure, computer viruses
        or hacker attacks, system instability, user location, user shutdown, and
        any other technical, internet network, communication line reasons, etc.
        Therefore, HISEVEN is not responsible for any losses incurred by users
        or third parties.
      </p>
      <p style="text-indent:2em">
        4. Users understand and confirm that HISEVEN needs to regularly or
        irregularly inspect or maintain this software platform or related
        equipment. If the service is interrupted within a reasonable time due to
        such circumstances, HISEVEN is not responsible for this.
      </p>
      <p style="text-indent:2em">
        5. HISEVEN has the right to handle illegal or non-compliant content in
        accordance with laws and regulations and this agreement. This right does
        not constitute HISEVEN's obligation or commitment, and HISEVEN cannot
        guarantee timely discovery of illegal or non-compliant behavior or
        corresponding processing.
      </p>
      <p style="text-indent:2em">
        6. Users understand and confirm that HISEVEN is not responsible for any
        losses caused by quality defects of the following products or services
        provided by HISEVEN to users:
      </p>
      <p style="text-indent:4em">
        (1) Services provided by HISEVEN to users for free;
      </p>
      <p style="text-indent:4em">
        (2) Any products or services given to users by HISEVEN as gifts.
      </p>
      <p style="text-indent:2em">
        7. In any case, HISEVEN is not responsible for any indirect,
        consequential, punitive, incidental, special, or criminal damages,
        including losses suffered by users due to their use of this software
        platform (even if HISEVEN has been informed of the possibility of such
        losses). Despite the possible conflicting provisions in this agreement,
        HISEVEN's total liability to users for any reason or in any way shall
        not exceed the fees (if any) paid by users to HISEVEN for using the
        services provided by HISEVEN.
      </p>

      <h3>Ⅷ. Changes, Interruptions, and Termination of Services</h3>
      <p style="text-indent:2em">
        1. In view of the special nature of network services, the user agrees
        that HISEVEN has the right to change, interrupt, or terminate part or
        all of the services (including paid services) at any time. Before
        changing, interrupting, or terminating the services, HISEVEN shall
        notify the user and provide equivalent alternative services to affected
        users. If the user does not accept the alternative services, both
        parties shall negotiate a reasonable solution based on friendly
        consultation according to the actual situation.
      </p>
      <p style="text-indent:2em">
        2. In the event of any of the following circumstances, HISEVEN has the
        right to change, interrupt, or terminate free or paid services provided
        to users without any responsibility to users or any third party:
      </p>
      <p style="text-indent:4em">
        (1) According to legal provisions, users should submit true information,
        but the personal information provided by users is not true and no
        reasonable proof is provided;
      </p>
      <p style="text-indent:4em">
        (2) Users violate relevant laws, regulations, or provisions of this
        agreement;
      </p>
      <p style="text-indent:4em">
        (3) According to legal provisions or requirements of competent
        authorities;
      </p>
      <p style="text-indent:4em">
        (4) For security reasons or other necessary circumstances;
      </p>

      <h3>IX.Other Clauses</h3>
      <p style="text-indent:2em">
        1. HISEVEN sincerely reminds users to pay attention to the clauses that
        exempt HISEVEN from liability and restrict user rights in this
        agreement. Please read them carefully and consider the risks
        independently. Minors should read this agreement under the guidance of
        their legal guardians.
      </p>
      <p style="text-indent:2em">
        2. If any disputes or controversies arise between the user and HISEVEN,
        they should first try to resolve them through friendly consultation. If
        consultation fails, the user agrees to submit the dispute or controversy
        to the court with jurisdiction over HISEVEN's place of residence.
      </p>
      <p style="text-indent:2em">
        3. If any clause of this agreement is invalid or unenforceable for any
        reason, the remaining clauses are still valid and binding on both
        parties.
      </p>
    </div>

        <div v-if="type === 2" style="margin:14px;" class="lh-base">
      <p style="text-indent:2em">HISEVEN隐私政策</p>
      <p style="text-indent:2em">
        欢迎使用我们的产品和服务！本政策为了说明HISEVEN
        SDN.BHD.公司（以下简称“HISEVEN”）在提供相关产品服务过程中如何收集、使用、存储您的个人信息及您享有何种权利，HISEVEN将通过本《HISEVEN隐私政策》向您阐述相关事宜，HISEVEN提醒您，在使用HISEVEN提供的各项产品服务前，请务必仔细阅读并理解本《HISEVEN隐私政策》，在确定充分理解并同意后方可使用HISEVEN提供的产品或服务，您使用HISEVEN提供的产品或服务，将视为您对本政策内容的接受和认可，如果您不同意本政策的条款，应停止使用HISEVEN提供的服务。
      </p>
      <p style="text-indent:2em">本政策将帮助您了解以下内容：</p>
      <p style="text-indent:2em">如何收集和使用您的个人信息</p>
      <p style="text-indent:2em">如何使用 Cookie和同类技术</p>
      <p style="text-indent:2em">共享、转让、公开披露您的个人信息</p>
      <p style="text-indent:2em">如何保护您的个人信息</p>
      <p style="text-indent:2em">如何访问或修改您的个人数据</p>
      <p style="text-indent:2em">您的个人信息如何在全球范围转移</p>
      <p style="text-indent:2em">本政策如何更新</p>
      <p style="text-indent:2em">联系我们</p>
      <p style="text-indent:2em">
        HISEVEN深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。HISEVEN致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。请在使用HISEVEN的服务前，仔细阅读并了解本《隐私政策条款》。
      </p>
      <h3 style="text-indent:2em">1.如何收集和使用您的个人信息</h3>
      <p style="text-indent:2em">
        1.1.个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。
      </p>
      <p style="text-indent:2em">1.2. HISEVEN收集您的信息，用于以下用途：</p>
      <p style="text-indent:4em">(1) 为了向您提供、维护、改进产品或服务。</p>
      <p style="text-indent:4em">(2) 向您发送重要通知。</p>
      <p style="text-indent:4em">(3) 激活或验证产品或服务。</p>
      <p style="text-indent:4em">
        (4) 开展在法律法规允许的前提先向您推广、介绍产品 。
      </p>
      <p style="text-indent:4em">(5) 经您许可的其他用途。</p>
      <p style="text-indent:2em">
        1.3 HISEVEN仅会出于本政策所述的以下目的，收集和使用您的个人信息：
      </p>
      <p style="text-indent:4em">
        (1)
        当您在HISEVEN网站创建账号时，您须向我们提供用户名，设置、确认您的登录密码，提供您的邮箱账号。您提交的邮箱账号用于您注册、绑定账户、密码找回时接受验证码，并且作为您与我们指定的联系方式之一，用来接受相关业务通知（如新品上线、活动提醒、服务变更、服务相关通知等）。
      </p>
      <p style="text-indent:4em">
        (2)
        在使用HISEVEN提供的服务过程中，HISEVEN将记录并保存您登陆和使用本服务的信息，包括但不限于IP
        地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息、日志信息、相关设备信息及您需求的网页记录等数据。
      </p>
      <p style="text-indent:4em">
        (3)
        在接受域名、备案等服务前，HISEVEN将通过网站页面向您展示您需要提交的信息，以届时网站页面展示为准，如果您不使用某些服务，则无需提供相关信息。
      </p>
      <h3 style="text-indent:2em">2.如何使用Cookie 和同类技术</h3>
      <p style="text-indent:2em">
        2.1 为确保网站正常运转，我们会在您的计算机或移动设备上存储名为 Cookie
        的小数据文件。Cookie 通常包含标识符、站点名称以及一些号码和字符。借助于
        Cookie，网站能够存储您的偏好或购物篮内的商品等数据。
      </p>
      <p style="text-indent:2em">
        2.2 我们不会将 Cookie
        用于本政策所述目的之外的任何用途。您可根据自己的偏好管理或删除
        Cookie。您可以清除计算机上保存的所有 Cookie，大部分网络浏览器都设有阻止
        Cookie
        的功能。但如果您这么做，则需要在每一次访问我们的网站时亲自更改用户设置。
      </p>
      <p style="text-indent:2em">
        2.3 除 Cookie
        外，我们还会在网站上使用网站信标和像素标签等其他同类技术。例如，我们向您发送的电子邮件可能含有链接至我们网站内容的点击URL。如果您点击该链接，我们则会跟踪此次点击，帮助我们了解您的产品或服务偏好并改善客户服务。网站信标通常是一种嵌入到网站或电子邮件中的透明图像。借助于电子邮件中的像素标签，我们能够获知电子邮件是否被打开。如果您不希望自己的活动以这种方式被追踪，则可以随时从我们的寄信名单中退订。
      </p>
      <h3 style="text-indent:2em">3.如何共享、转让、公开披露您的个人信息</h3>
      <p style="text-indent:2em">3.1 共享</p>
      <p style="text-indent:2em">
        我们不会与HISEVEN以外的任何公司、组织和个人分享您的个人信息，
        但以下情况除外：
      </p>
      <p style="text-indent:4em">
        (1)
        在获取明确同意的情况下共享：获得您的明确同意后，我们会与其他方共享您的个人信息；
      </p>
      <p style="text-indent:4em">
        (2)
        我们可能会根据法律法规规定，或按政府主管部门的强制性要求，对外共享您的个人信息。
      </p>
      <p style="text-indent:4em">
        (3)
        与我们的关联公司共享：您的个人信息可能会与HISEVEN的关联公司共享。我们只会共享必要的个人信息，且受本隐私政策中所声明目的的约束。关联公司如要改变个人信息的处理目的，将再次征求您的授权同意。我们的关联公司是指任何一方现在或将来控制、受其控制或与其共同被控制的任何公司或合法机构。“控制”是指有权决定一个公司的财务和经营政策，直接或间接享有该公司50%以上的管理或决策权利，并能据以从该公司的经营活动中获取利益。
      </p>
      <p style="text-indent:4em">
        (4)
        与授权合作伙伴共享：仅为实现本政策中声明的目的，我们的某些服务将由授权合作伙伴提供。我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的合作伙伴无权将共享的个人信息用于任何其他用途。
      </p>
      <p style="text-indent:2em">
        对我们与之共享用户信息的公司、组织和个人，我们会与其签署严格的保密协议以及信息保护约定，要求他们按照我们的说明、本隐私权政策以及其他任何相关的保密和安全措施来处理用户信息。
      </p>
      <p style="text-indent:2em">3.2 转让</p>
      <p style="text-indent:2em">
        我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：
      </p>
      <p style="text-indent:4em">
        (1)
        在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；
      </p>
      <p style="text-indent:4em">
        (2)
        在涉及合并、收购或破产清算时，如涉及到个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。
      </p>
      <p style="text-indent:2em">3.3 公开披露</p>
      <p style="text-indent:2em">
        我们仅会在以下情况下，公开披露您的个人信息：
      </p>
      <p style="text-indent:4em">(1) 获得您明确同意后；</p>
      <p style="text-indent:4em">
        (2)
        基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。
      </p>
      <p style="text-indent:2em">
        3.4. 共享、转让、公开披露用户信息时事先征得授权同意的例外
      </p>
      <p style="text-indent:2em">
        以下情形中，共享、转让、公开披露您的用户信息无需事先征得您的授权同意：
      </p>
      <p style="text-indent:4em">(1) 与国家安全、国防安全有关的；</p>
      <p style="text-indent:4em">
        (2) 与公共安全、公共卫生、重大公共利益有关的；
      </p>
      <p style="text-indent:4em">
        (3) 与犯罪侦查、起诉、审判和判决执行等有关的；
      </p>
      <p style="text-indent:4em">
        (4)
        出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；
      </p>
      <p style="text-indent:4em">(5) 您自行向社会公众公开的个人信息；</p>
      <p style="text-indent:4em">
        (6)
        从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。
      </p>
      <h3 style="text-indent:2em">4.如何保护您的个人信息</h3>
      <p style="text-indent:2em">
        4.1
        HISEVEN非常重视您的信息安全。我们努力采取各种合理的物理、电子和管理方面的安全措施来保护您的用户信息。防止用户信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会使用加密技术提高用户信息的安全性；我们会使用受信赖的保护机制防止用户信息遭到恶意攻击；我们会部署访问控制机制，尽力确保只有授权人员才可访问用户信息；以及我们会举办安全和隐私保护培训课程，加强员工对于保护用户信息重要性的认识。
      </p>
      <p style="text-indent:2em">
        4.2
        我们会采取一切合理可行的措施，确保未收集无关的个人信息。我们只会在达成本政策所述目的所需的期限内保留您的个人信息，除非需要延长保留期或受到法律的允许。超出上述用户信息保存期限后，我们会对您的个人信息进行删除或匿名化处理。
      </p>
      <p style="text-indent:2em">
        4.3
        请使用复杂密码，协助我们保证您的账号安全。我们将尽力保障您发送给我们的任何信息的安全性。为更有效的保障您的信息安全，我们也希望您能够加强自我保护意识。我们仅在HISEVEN直接导致您个人信息泄露的范围内承担责任，因此，请您妥善保管您的账号及密码信息，避免您的个人信息泄露。
      </p>
      <p style="text-indent:2em">
        4.4
        互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们会及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。
      </p>
      <h3 style="text-indent:2em">5.如何访问或修改您的个人数据</h3>
      <p style="text-indent:2em">
        您应确保提交的所有个人数据都准确无误，我们会尽力维护个人数据的准确和完整。为遵守适用法律的明确要求，您可能
      </p>
      <p style="text-indent:4em">
        (1)有权访问我们持有的关于您的特定的个人数据；
      </p>
      <p style="text-indent:4em">(2)要求我们更新或更正您的不准确的个人数据；</p>
      <p style="text-indent:4em">
        (3)依照法律规定要求我们删除您的个人数据。如果您想行使相关的权利，请联系我们。为保障安全，您可能需要提供书面请求。如果我们有合理依据认为这些请求存在欺骗性、无法实行或损害他人隐私权或权益，我们则会拒绝处理请求。
      </p>
      <p style="text-indent:2em">
        在以下情形中，您可以向我们提出删除个人信息的请求：
      </p>
      <p style="text-indent:4em">
        (1) 如果我们处理个人信息的行为违反法律法规；
      </p>
      <p style="text-indent:4em">
        (2) 如果我们收集、使用您的个人信息，却未征得您的明确同意；
      </p>
      <p style="text-indent:4em">
        (3) 如果我们处理个人信息的行为严重违反了与您的约定。
      </p>
      <p style="text-indent:2em">
        为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。
      </p>
      <h3 style="text-indent:2em">6.您的个人数据的保存和跨境转移</h3>
      <p style="text-indent:2em">
        如在符合适用法律规定的情形下因业务需要向境外传输个人信息的，我们会事先征得您的同意，并向您告知信息出境的目的、接收方、安全保障措施、安全风险等情况。
      </p>
      <h3 style="text-indent:2em">7.本政策如何更新</h3>
      <p style="text-indent:2em">我们的隐私政策可能变更。</p>
      <p style="text-indent:2em">
        未经您明确同意，我们不会削减您按照本隐私政策所应享有的权利。我们会通过公司官网发布对本政策所做的任何变更。
      </p>
      <p style="text-indent:2em">
        对于重大变更，我们还会提供更为显著的通知（包括对于某些服务，我们会通过电子邮件发送通知，说明隐私政策的具体变更内容）。
      </p>
      <p style="text-indent:2em">本政策所指的重大变更包括但不限于：</p>
      <p style="text-indent:4em">
        (1)
        我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；
      </p>
      <p style="text-indent:4em">
        (2)
        我们在所有权结构、组织架构等方面发生重大变化。如业务调整、破产并购等引起的所有者变更等；
      </p>
      <p style="text-indent:4em">
        (3) 个人信息共享、转让或公开披露的主要对象发生变化；
      </p>
      <p style="text-indent:4em">
        (4) 您参与个人信息处理方面的权利及其行使方式发生重大变化；
      </p>
      <p style="text-indent:4em">
        (5) 我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；
      </p>
      <p style="text-indent:4em">
        (6) 个人信息安全影响评估报告表明存在高风险时。
      </p>
      <h3 style="text-indent:2em">8.联系我们</h3>
      <p style="text-indent:2em">
        您对本政策声明内容有任何疑问和意见，或者针对HISEVEN对本隐私权政策的实践以及操作上您有任何疑问和意见的，您可通过support@hi007.com联系我们。
      </p>
    </div>
    <div v-if="type === 2" style="margin:14px;" class="lh-base">
      <p style="text-indent:2em">HISEVEN Privacy Policy</p>
      <p style="text-indent:2em">
        Welcome to use our products and services! This policy is designed to
        explain how HISEVEN SDN.BHD. (hereinafter referred to as "HISEVEN")
        collects, uses, and stores your personal information and what rights you
        have. HISEVEN will explain these matters through this "HISEVEN Privacy
        Policy". HISEVEN reminds you to carefully read and understand this
        "HISEVEN Privacy Policy" before using any of the products or services
        provided by HISEVEN. Your use of HISEVEN's products or services will be
        deemed as your acceptance and acknowledgment of the contents of this
        policy. If you do not agree to the terms of this policy, you should stop
        using the services provided by HISEVEN.
      </p>
      <p style="text-indent:2em">
        This policy will help you understand the following:
      </p>
      <p style="text-indent:2em">
        How your personal information is collected and used
      </p>
      <p style="text-indent:2em">
        How cookies and similar technologies are used
      </p>
      <p style="text-indent:2em">
        How your personal information is shared, transferred, and publicly
        disclosed
      </p>
      <p style="text-indent:2em">How your personal information is protected</p>
      <p style="text-indent:2em">How to access or modify your personal data</p>
      <p style="text-indent:2em">
        How your personal information is transferred globally
      </p>
      <p style="text-indent:2em">How this policy is updated</p>
      <p style="text-indent:2em">Contact us</p>
      <p style="text-indent:2em">
        HISEVEN understands the importance of your personal information and will
        do its utmost to protect the security and reliability of your personal
        information. HISEVEN is committed to maintaining your trust by adhering
        to the principles of consistency between rights and responsibilities,
        clear purposes, consent, minimal necessity, security assurance, subject
        participation, and openness and transparency in protecting your personal
        information. At the same time, we promise to adopt industry-standard
        security measures and safeguards to protect your personal information.
        Please read and understand the "Privacy Policy Terms" carefully before
        using HISEVEN's services.
      </p>
      <h3 style="text-indent:2em">
        1. How Your Personal Information is Collected and Used
      </h3>
      <p style="text-indent:2em">
        1.1 Personal information refers to various information recorded
        electronically or by other means that can identify a specific individual
        or reflect specific activities of a specific individual.
      </p>
      <p style="text-indent:2em">
        1.2 HISEVEN collects your information for the following purposes:
      </p>
      <p style="text-indent:4em">
        (1) To provide, maintain, and improve products or services to you.
      </p>
      <p style="text-indent:4em">(2) To send you important notifications.</p>
      <p style="text-indent:4em">
        (3) To activate or verify products or services.
      </p>
      <p style="text-indent:4em">
        (4) To promote and introduce products to you, subject to the prior
        permission allowed by laws and regulations.
      </p>
      <p style="text-indent:4em">
        (5) For other purposes with your permission.
      </p>
      <p style="text-indent:2em">
        1.3 HISEVEN only collects and uses your personal information for the
        purposes described in this policy:
      </p>
      <p style="text-indent:4em">
        (1) When you create an account on the HISEVEN website, you need to
        provide us with a username, set and confirm your login password, and
        provide your email account. The email account you submit is used to
        receive verification codes when you register, bind accounts, or retrieve
        passwords. It is also used as one of the designated contact methods for
        you to receive relevant business notifications (such as new product
        launches, event reminders, service changes, service-related notices,
        etc.).
      </p>
      <p style="text-indent:4em">
        (2) In the process of using the services provided by HISEVEN, HISEVEN
        will record and save information about your login and use of this
        service, including but not limited to IP address, browser type, language
        used, access date and time, software and hardware feature information,
        log information, relevant device information, and webpage records of
        your requests.
      </p>
      <p style="text-indent:4em">
        (3) Before receiving domain name registration and filing services,
        HISEVEN will display the information you need to submit through the
        website page. The information displayed on the website page at that time
        shall prevail. If you do not use certain services, there is no need to
        provide relevant information.
      </p>
      <h3 style="text-indent:2em">
        2. How cookies and similar technologies are used
      </h3>
      <p style="text-indent:2em">
        2.1 To ensure the normal operation of the website, we will store small
        data files called Cookies on your computer or mobile device. Cookies
        usually contain identifiers, site names, and some numbers and
        characters. With the help of Cookies, websites can store your
        preferences or data such as items in your shopping cart.
      </p>

      <p style="text-indent:2em">
        2.2 We will not use Cookies for any purposes other than those stated in
        this policy. You can manage or delete Cookies according to your
        preferences. Most web browsers have functions to block Cookies. However,
        if you do so, you need to manually change the user settings each time
        you visit our website.
      </p>
      <p style="text-indent:2em">
        2.3 In addition to Cookies, we also use other similar technologies on
        the website, such as web beacons and pixel tags. For example, the emails
        we send to you may contain URLs that link to our website content. If you
        click on the link, we will track this click to help us understand your
        product or service preferences and improve customer service. Web beacons
        are usually transparent images embedded on websites or in emails. With
        pixel tags in emails, we can determine if the emails are opened. If you
        do not want your activities to be tracked in this way, you can
        unsubscribe from our mailing list at any time.
      </p>
      <h3 style="text-indent:2em">
        3. How your personal information is shared, transferred, and publicly
        disclosed
      </h3>
      <p style="text-indent:2em">3.1 Sharing</p>
      <p style="text-indent:2em">
        We will not share your personal information with any companies,
        organizations, or individuals outside of HISEVEN, except in the
        following cases:
      </p>
      <p style="text-indent:4em">
        (1) Sharing with explicit consent: With your explicit consent, we will
        share your personal information with other parties.
      </p>
      <p style="text-indent:4em">
        (2) We may share your personal information with external parties as
        required by laws and regulations or mandatory requirements from
        government authorities.
      </p>
      <p style="text-indent:4em">
        (3) Sharing with our affiliated companies: Your personal information may
        be shared with HISEVEN's affiliated companies. We will only share the
        necessary personal information and will be bound by the purposes stated
        in this privacy policy. If our affiliated companies change the
        processing purposes of personal information, they will seek your
        authorization and consent again. Our affiliated companies refer to any
        company or legal entity that currently or in the future controls, is
        controlled by, or is jointly controlled by, HISEVEN. "Control" means
        having the right to determine the financial and operational policies of
        a company, directly or indirectly owning more than 50% of the management
        or decision-making rights of the company, and being able to benefit from
        the business activities of the company as a result.
      </p>
      <p style="text-indent:4em">
        (4) Sharing with authorized partners: For the purposes stated in this
        policy, some of our services will be provided by authorized partners. We
        may share some of your personal information with partners to provide
        better customer service and user experience. We will only share your
        personal information for legitimate, lawful, necessary, specific, and
        explicit purposes, and only share the personal information necessary to
        provide the services. Our partners are not allowed to use the shared
        personal information for any other purposes.
      </p>
      <p style="text-indent:2em">
        We will sign strict confidentiality agreements and information
        protection agreements with companies, organizations, and individuals
        with whom we share user information, requiring them to handle user
        information in accordance with our instructions, this privacy policy,
        and any other relevant confidentiality and security measures.
      </p>

      <p style="text-indent:2em">3.2 Transfer</p>
      <p style="text-indent:2em">
        We will not transfer your personal information to any companies,
        organizations, or individuals, except in the following cases:
      </p>
      <p style="text-indent:4em">
        (1) Transfer with explicit consent: With your explicit consent, we will
        transfer your personal information to other parties.
      </p>
      <p style="text-indent:4em">
        (2) In the event of mergers, acquisitions, or bankruptcy liquidation, if
        there is a transfer of personal information, we will require the new
        company or organization holding your personal information to continue to
        be bound by this privacy policy, otherwise, we will require the company
        or organization to seek your authorization and consent again.
      </p>
      <p style="text-indent:2em">3.3 Public Disclosure</p>
      <p style="text-indent:2em">
        We will only disclose your personal information publicly in the
        following cases:
      </p>
      <p style="text-indent:4em">(1) With your explicit consent;</p>
      <p style="text-indent:4em">
        (2) Disclosure based on legal requirements: We may disclose your
        personal information in cases where it is required by law, legal
        proceedings, litigation, or mandatory requirements from government
        authorities.
      </p>
      <p style="text-indent:2em">
        3.4 Exceptions to obtaining prior authorization and consent for sharing,
        transferring, and publicly disclosing user information
      </p>
      <p style="text-indent:2em">
        In the following circumstances, sharing, transferring, and publicly
        disclosing your user information does not require your prior
        authorization and consent:
      </p>
      <p style="text-indent:4em">
        (1) Matters related to national security and defense;
      </p>
      <p style="text-indent:4em">
        (2) Matters related to public safety, public health, and major public
        interests;
      </p>
      <p style="text-indent:4em">
        (3) Matters related to criminal investigations, prosecutions, trials,
        and enforcement of judgments;
      </p>
      <p style="text-indent:4em">
        (4) Matters necessary to protect the vital interests of you or other
        individuals, but it is difficult to obtain your consent;
      </p>
      <p style="text-indent:4em">
        (5) Personal information that you voluntarily disclose to the public;
      </p>
      <p style="text-indent:4em">
        (6) Collection of personal information from legally publicly disclosed
        information, such as legitimate news reports, government information
        disclosure, and other channels.
      </p>
      <h3 style="text-indent:2em">
        4. How your personal information is protected
      </h3>
      <p style="text-indent:2em">
        4.1 HISEVEN attaches great importance to the security of your
        information. We strive to adopt various reasonable physical, electronic,
        and managerial security measures to protect your user information,
        prevent unauthorized access, public disclosure, use, modification,
        damage, or loss of user information. We use encryption technology to
        enhance the security of user information; we deploy trusted protection
        mechanisms to prevent malicious attacks on user information; we
        implement access control mechanisms to ensure that only authorized
        personnel can access user information; and we conduct security and
        privacy protection training courses to enhance employees' awareness of
        the importance of protecting user information.
      </p>
      <p style="text-indent:2em">
        4.2 We will take all reasonable and feasible measures to ensure that
        irrelevant personal information is not collected. We will only retain
        your personal information for the period required to achieve the
        purposes stated in this policy, unless an extension of the retention
        period is necessary or permitted by law. After the above-mentioned
        retention period for user information has expired, we will delete or
        anonymize your personal information.
      </p>
      <p style="text-indent:2em">
        4.3 Please use a complex password to assist us in ensuring the security
        of your account. We will do our best to ensure the security of any
        information you send to us. To further enhance your information
        security, we also hope that you can strengthen your self-protection
        awareness. We only assume responsibility for the scope of personal
        information leakage directly caused by HISEVEN. Therefore, please
        properly safeguard your account and password information to avoid the
        leakage of your personal information.
      </p>
      <p style="text-indent:2em">
        4.4 The Internet environment is not 100% secure. We will do our best to
        ensure or guarantee the security of any information you send to us. In
        the event of a personal information security incident, we will promptly
        inform you in accordance with legal requirements: the basic situation
        and possible impacts of the security incident, the measures we have
        taken or will take, suggestions for your self-protection and risk
        reduction, remedial measures for you, etc. We will inform you of the
        relevant information of the incident through email, letters, telephone
        calls, push notifications, etc. When it is difficult to inform
        individuals one by one, we will publish announcements in a reasonable
        and effective manner. At the same time, we will proactively report the
        disposal of personal information security incidents in accordance with
        regulatory requirements.
      </p>
      <h3 style="text-indent:2em">
        5. How to access or modify your personal data
      </h3>
      <p style="text-indent:2em">
        You should ensure that all personal data you submit is accurate. We will
        do our best to maintain the accuracy and completeness of personal data.
        In compliance with applicable laws, you may have the right to:
      </p>
      <p style="text-indent:4em">
        (1) Access specific personal data that we hold about you;
      </p>
      <p style="text-indent:4em">
        (2) Request us to update or correct your inaccurate personal data;
      </p>
      <p style="text-indent:4em">
        (3) Request us to delete your personal data in accordance with legal
        requirements. If you wish to exercise these rights, please contact us.
        For security reasons, you may need to provide a written request. If we
        have reasonable grounds to believe that these requests are deceptive,
        unenforceable, or infringe upon the privacy rights or interests of
        others, we may refuse to process the requests.
      </p>
      <p style="text-indent:2em">
        You can request the deletion of personal information in the following
        circumstances:
      </p>
      <p style="text-indent:4em">
        (1) If our processing of personal information violates laws and
        regulations;
      </p>
      <p style="text-indent:4em">
        (2) If we collect and use your personal information without obtaining
        your explicit consent;
      </p>
      <p style="text-indent:4em">
        (3) If our processing of personal information seriously violates our
        agreement with you.
      </p>
      <p style="text-indent:2em">
        For security reasons, you may need to provide a written request or other
        means to prove your identity. We may ask you to verify your identity
        first and then process your request.
      </p>
      <h3 style="text-indent:2em">
        6. How your personal information is transferred globally
      </h3>
      <p style="text-indent:2em">
        If it is necessary to transfer personal information overseas due to
        business needs and in compliance with applicable laws and regulations,
        we will obtain your consent in advance and inform you of the purpose of
        the information export, the recipients, security measures, and security
        risks.
      </p>
      <h3 style="text-indent:2em">7. How this policy is updated</h3>
      <p style="text-indent:2em">Our privacy policy may change.</p>
      <p style="text-indent:2em">
        Without your explicit consent, we will not reduce your rights under this
        privacy policy. We will publish any changes to this policy on our
        official website.
      </p>
      <p style="text-indent:2em">
        For significant changes, we will provide more prominent notices
        (including, for certain services, sending email notifications specifying
        the specific changes to the privacy policy).
      </p>
      <p style="text-indent:2em">
        Significant changes referred to in this policy include but are not
        limited to:
      </p>
      <p style="text-indent:4em">
        (1) Significant changes in our service model, such as the purpose of
        processing personal information, types of personal information
        processed, and methods of using personal information;
      </p>
      <p style="text-indent:4em">
        (2) Significant changes in our ownership structure and organizational
        structure, such as business adjustments, bankruptcy and mergers causing
        changes in ownership, etc.;
      </p>
      <p style="text-indent:4em">
        (3) Major changes in the main recipients of personal information
        sharing, transfer, or public disclosure;
      </p>
      <p style="text-indent:4em">
        (4) Significant changes in your rights and methods of exercising your
        rights in personal information processing;
      </p>
      <p style="text-indent:4em">
        (5) Changes in the department responsible for personal information
        security, contact methods, and complaint channels;
      </p>
      <p style="text-indent:4em">
        (6) High-risk findings in the personal information security impact
        assessment report.
      </p>
      <h3 style="text-indent:2em">8. Contact us</h3>
      <p style="text-indent:2em">
        If you have any questions or comments about the content of this policy
        statement, or if you have any questions or comments regarding HISEVEN's
        practices and operations related to this privacy policy, you can contact
        us at support@hi007.com.
      </p>
    </div>
    <template #title>
      <div>
        <span class="fs-30">{{ title }}</span>
        <lang-select class="set-language" />
      </div>
    </template>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleClose">{{
          $t("button.confirm")
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
// import { useStore } from 'vuex'
// import { mapGetters } from "vuex";
//import LangSelect from "@/components/LangSelect/index";
export default {
  components: {
 //   LangSelect
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    styleWidth: {
      type: String,
      default: "35%"
    }
  },
  data() {
    return {
      dialogVisible:false,
      isLanguage:'en',
      title:'',
      type:1  //1协议 2隐私
    };
  },
  computed: {
    // ...mapGetters({
    //   isLanguage: "language"
    // })
  },
  methods: {
    handleClose() {
       this.dialogVisible = false
    },
    hanleOpen(val){
      this.dialogVisible = true
      this.type = val
      this.title = val === 1 ? this.$t("loginModifyRegister.agreementTitle") : this.$t("loginModifyRegister.privacyTitle")
    }
  }
};
</script>

<style lang="scss" scoped>
.lh-base {
  word-break: break-word;
}
.set-language {
  color: #000;
  position: absolute;
  top: 16px;
  font-size: 18px;
  right: 60px;
  cursor: pointer;
}
.service-dialog {
  .el-dialog__body {
    margin: 4px;
  }
}
</style>
