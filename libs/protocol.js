/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AddFriendRequest = (function() {

    /**
     * Properties of an AddFriendRequest.
     * @exports IAddFriendRequest
     * @interface IAddFriendRequest
     * @property {string} targetUid AddFriendRequest targetUid
     * @property {string} reason AddFriendRequest reason
     */

    /**
     * Constructs a new AddFriendRequest.
     * @exports AddFriendRequest
     * @classdesc Represents an AddFriendRequest.
     * @implements IAddFriendRequest
     * @constructor
     * @param {IAddFriendRequest=} [properties] Properties to set
     */
    function AddFriendRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AddFriendRequest targetUid.
     * @member {string} targetUid
     * @memberof AddFriendRequest
     * @instance
     */
    AddFriendRequest.prototype.targetUid = "";

    /**
     * AddFriendRequest reason.
     * @member {string} reason
     * @memberof AddFriendRequest
     * @instance
     */
    AddFriendRequest.prototype.reason = "";

    /**
     * Creates a new AddFriendRequest instance using the specified properties.
     * @function create
     * @memberof AddFriendRequest
     * @static
     * @param {IAddFriendRequest=} [properties] Properties to set
     * @returns {AddFriendRequest} AddFriendRequest instance
     */
    AddFriendRequest.create = function create(properties) {
        return new AddFriendRequest(properties);
    };

    /**
     * Encodes the specified AddFriendRequest message. Does not implicitly {@link AddFriendRequest.verify|verify} messages.
     * @function encode
     * @memberof AddFriendRequest
     * @static
     * @param {IAddFriendRequest} message AddFriendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddFriendRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetUid);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
        return writer;
    };

    /**
     * Encodes the specified AddFriendRequest message, length delimited. Does not implicitly {@link AddFriendRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddFriendRequest
     * @static
     * @param {IAddFriendRequest} message AddFriendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddFriendRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AddFriendRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AddFriendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddFriendRequest} AddFriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddFriendRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AddFriendRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.targetUid = reader.string();
                break;
            case 2:
                message.reason = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("targetUid"))
            throw $util.ProtocolError("missing required 'targetUid'", { instance: message });
        if (!message.hasOwnProperty("reason"))
            throw $util.ProtocolError("missing required 'reason'", { instance: message });
        return message;
    };

    /**
     * Decodes an AddFriendRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddFriendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddFriendRequest} AddFriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddFriendRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AddFriendRequest message.
     * @function verify
     * @memberof AddFriendRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AddFriendRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.targetUid))
            return "targetUid: string expected";
        if (!$util.isString(message.reason))
            return "reason: string expected";
        return null;
    };

    /**
     * Creates an AddFriendRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddFriendRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddFriendRequest} AddFriendRequest
     */
    AddFriendRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.AddFriendRequest)
            return object;
        var message = new $root.AddFriendRequest();
        if (object.targetUid != null)
            message.targetUid = String(object.targetUid);
        if (object.reason != null)
            message.reason = String(object.reason);
        return message;
    };

    /**
     * Creates a plain object from an AddFriendRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddFriendRequest
     * @static
     * @param {AddFriendRequest} message AddFriendRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AddFriendRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.targetUid = "";
            object.reason = "";
        }
        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
            object.targetUid = message.targetUid;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        return object;
    };

    /**
     * Converts this AddFriendRequest to JSON.
     * @function toJSON
     * @memberof AddFriendRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AddFriendRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AddFriendRequest;
})();

/**
 * ConversationType enum.
 * @exports ConversationType
 * @enum {string}
 * @property {number} ConversationType_Private=0 ConversationType_Private value
 * @property {number} ConversationType_Group=1 ConversationType_Group value
 * @property {number} ConversationType_System=2 ConversationType_System value
 * @property {number} ConversationType_ChatRoom=3 ConversationType_ChatRoom value
 * @property {number} ConversationType_Command=4 ConversationType_Command value
 */
$root.ConversationType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ConversationType_Private"] = 0;
    values[valuesById[1] = "ConversationType_Group"] = 1;
    values[valuesById[2] = "ConversationType_System"] = 2;
    values[valuesById[3] = "ConversationType_ChatRoom"] = 3;
    values[valuesById[4] = "ConversationType_Command"] = 4;
    return values;
})();

$root.Conversation = (function() {

    /**
     * Properties of a Conversation.
     * @exports IConversation
     * @interface IConversation
     * @property {ConversationType} type Conversation type
     * @property {string} target Conversation target
     * @property {number} line Conversation line
     */

    /**
     * Constructs a new Conversation.
     * @exports Conversation
     * @classdesc Represents a Conversation.
     * @implements IConversation
     * @constructor
     * @param {IConversation=} [properties] Properties to set
     */
    function Conversation(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Conversation type.
     * @member {ConversationType} type
     * @memberof Conversation
     * @instance
     */
    Conversation.prototype.type = 0;

    /**
     * Conversation target.
     * @member {string} target
     * @memberof Conversation
     * @instance
     */
    Conversation.prototype.target = "";

    /**
     * Conversation line.
     * @member {number} line
     * @memberof Conversation
     * @instance
     */
    Conversation.prototype.line = 0;

    /**
     * Creates a new Conversation instance using the specified properties.
     * @function create
     * @memberof Conversation
     * @static
     * @param {IConversation=} [properties] Properties to set
     * @returns {Conversation} Conversation instance
     */
    Conversation.create = function create(properties) {
        return new Conversation(properties);
    };

    /**
     * Encodes the specified Conversation message. Does not implicitly {@link Conversation.verify|verify} messages.
     * @function encode
     * @memberof Conversation
     * @static
     * @param {IConversation} message Conversation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Conversation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.target);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.line);
        return writer;
    };

    /**
     * Encodes the specified Conversation message, length delimited. Does not implicitly {@link Conversation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Conversation
     * @static
     * @param {IConversation} message Conversation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Conversation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Conversation message from the specified reader or buffer.
     * @function decode
     * @memberof Conversation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Conversation} Conversation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Conversation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Conversation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.target = reader.string();
                break;
            case 3:
                message.line = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        if (!message.hasOwnProperty("target"))
            throw $util.ProtocolError("missing required 'target'", { instance: message });
        if (!message.hasOwnProperty("line"))
            throw $util.ProtocolError("missing required 'line'", { instance: message });
        return message;
    };

    /**
     * Decodes a Conversation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Conversation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Conversation} Conversation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Conversation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Conversation message.
     * @function verify
     * @memberof Conversation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Conversation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            break;
        }
        if (!$util.isString(message.target))
            return "target: string expected";
        if (!$util.isInteger(message.line))
            return "line: integer expected";
        return null;
    };

    /**
     * Creates a Conversation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Conversation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Conversation} Conversation
     */
    Conversation.fromObject = function fromObject(object) {
        if (object instanceof $root.Conversation)
            return object;
        var message = new $root.Conversation();
        switch (object.type) {
        case "ConversationType_Private":
        case 0:
            message.type = 0;
            break;
        case "ConversationType_Group":
        case 1:
            message.type = 1;
            break;
        case "ConversationType_System":
        case 2:
            message.type = 2;
            break;
        case "ConversationType_ChatRoom":
        case 3:
            message.type = 3;
            break;
        case "ConversationType_Command":
        case 4:
            message.type = 4;
            break;
        }
        if (object.target != null)
            message.target = String(object.target);
        if (object.line != null)
            message.line = object.line | 0;
        return message;
    };

    /**
     * Creates a plain object from a Conversation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Conversation
     * @static
     * @param {Conversation} message Conversation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Conversation.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "ConversationType_Private" : 0;
            object.target = "";
            object.line = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ConversationType[message.type] : message.type;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = message.target;
        if (message.line != null && message.hasOwnProperty("line"))
            object.line = message.line;
        return object;
    };

    /**
     * Converts this Conversation to JSON.
     * @function toJSON
     * @memberof Conversation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Conversation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Conversation;
})();

/**
 * GroupType enum.
 * @exports GroupType
 * @enum {string}
 * @property {number} GroupType_Normal=0 GroupType_Normal value
 * @property {number} GroupType_Free=1 GroupType_Free value
 * @property {number} GroupType_Restricted=2 GroupType_Restricted value
 */
$root.GroupType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GroupType_Normal"] = 0;
    values[valuesById[1] = "GroupType_Free"] = 1;
    values[valuesById[2] = "GroupType_Restricted"] = 2;
    return values;
})();

$root.GroupInfo = (function() {

    /**
     * Properties of a GroupInfo.
     * @exports IGroupInfo
     * @interface IGroupInfo
     * @property {string|null} [targetId] GroupInfo targetId
     * @property {string} name GroupInfo name
     * @property {string|null} [portrait] GroupInfo portrait
     * @property {string|null} [owner] GroupInfo owner
     * @property {GroupType} type GroupInfo type
     * @property {number|null} [memberCount] GroupInfo memberCount
     * @property {string|null} [extra] GroupInfo extra
     * @property {number|Long|null} [updateDt] GroupInfo updateDt
     * @property {number|Long|null} [memberUpdateDt] GroupInfo memberUpdateDt
     */

    /**
     * Constructs a new GroupInfo.
     * @exports GroupInfo
     * @classdesc Represents a GroupInfo.
     * @implements IGroupInfo
     * @constructor
     * @param {IGroupInfo=} [properties] Properties to set
     */
    function GroupInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GroupInfo targetId.
     * @member {string} targetId
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.targetId = "";

    /**
     * GroupInfo name.
     * @member {string} name
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.name = "";

    /**
     * GroupInfo portrait.
     * @member {string} portrait
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.portrait = "";

    /**
     * GroupInfo owner.
     * @member {string} owner
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.owner = "";

    /**
     * GroupInfo type.
     * @member {GroupType} type
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.type = 0;

    /**
     * GroupInfo memberCount.
     * @member {number} memberCount
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.memberCount = 0;

    /**
     * GroupInfo extra.
     * @member {string} extra
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.extra = "";

    /**
     * GroupInfo updateDt.
     * @member {number|Long} updateDt
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GroupInfo memberUpdateDt.
     * @member {number|Long} memberUpdateDt
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.memberUpdateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GroupInfo instance using the specified properties.
     * @function create
     * @memberof GroupInfo
     * @static
     * @param {IGroupInfo=} [properties] Properties to set
     * @returns {GroupInfo} GroupInfo instance
     */
    GroupInfo.create = function create(properties) {
        return new GroupInfo(properties);
    };

    /**
     * Encodes the specified GroupInfo message. Does not implicitly {@link GroupInfo.verify|verify} messages.
     * @function encode
     * @memberof GroupInfo
     * @static
     * @param {IGroupInfo} message GroupInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.portrait);
        if (message.owner != null && message.hasOwnProperty("owner"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.owner);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.memberCount);
        if (message.extra != null && message.hasOwnProperty("extra"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.extra);
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.updateDt);
        if (message.memberUpdateDt != null && message.hasOwnProperty("memberUpdateDt"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.memberUpdateDt);
        return writer;
    };

    /**
     * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link GroupInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GroupInfo
     * @static
     * @param {IGroupInfo} message GroupInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GroupInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GroupInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GroupInfo} GroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GroupInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.targetId = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.portrait = reader.string();
                break;
            case 4:
                message.owner = reader.string();
                break;
            case 5:
                message.type = reader.int32();
                break;
            case 6:
                message.memberCount = reader.int32();
                break;
            case 7:
                message.extra = reader.string();
                break;
            case 8:
                message.updateDt = reader.int64();
                break;
            case 9:
                message.memberUpdateDt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GroupInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GroupInfo} GroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GroupInfo message.
     * @function verify
     * @memberof GroupInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GroupInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            if (!$util.isString(message.targetId))
                return "targetId: string expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            if (!$util.isString(message.portrait))
                return "portrait: string expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isString(message.owner))
                return "owner: string expected";
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 0:
        case 1:
        case 2:
            break;
        }
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            if (!$util.isInteger(message.memberCount))
                return "memberCount: integer expected";
        if (message.extra != null && message.hasOwnProperty("extra"))
            if (!$util.isString(message.extra))
                return "extra: string expected";
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
                return "updateDt: integer|Long expected";
        if (message.memberUpdateDt != null && message.hasOwnProperty("memberUpdateDt"))
            if (!$util.isInteger(message.memberUpdateDt) && !(message.memberUpdateDt && $util.isInteger(message.memberUpdateDt.low) && $util.isInteger(message.memberUpdateDt.high)))
                return "memberUpdateDt: integer|Long expected";
        return null;
    };

    /**
     * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GroupInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GroupInfo} GroupInfo
     */
    GroupInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.GroupInfo)
            return object;
        var message = new $root.GroupInfo();
        if (object.targetId != null)
            message.targetId = String(object.targetId);
        if (object.name != null)
            message.name = String(object.name);
        if (object.portrait != null)
            message.portrait = String(object.portrait);
        if (object.owner != null)
            message.owner = String(object.owner);
        switch (object.type) {
        case "GroupType_Normal":
        case 0:
            message.type = 0;
            break;
        case "GroupType_Free":
        case 1:
            message.type = 1;
            break;
        case "GroupType_Restricted":
        case 2:
            message.type = 2;
            break;
        }
        if (object.memberCount != null)
            message.memberCount = object.memberCount | 0;
        if (object.extra != null)
            message.extra = String(object.extra);
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        if (object.memberUpdateDt != null)
            if ($util.Long)
                (message.memberUpdateDt = $util.Long.fromValue(object.memberUpdateDt)).unsigned = false;
            else if (typeof object.memberUpdateDt === "string")
                message.memberUpdateDt = parseInt(object.memberUpdateDt, 10);
            else if (typeof object.memberUpdateDt === "number")
                message.memberUpdateDt = object.memberUpdateDt;
            else if (typeof object.memberUpdateDt === "object")
                message.memberUpdateDt = new $util.LongBits(object.memberUpdateDt.low >>> 0, object.memberUpdateDt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GroupInfo
     * @static
     * @param {GroupInfo} message GroupInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GroupInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.targetId = "";
            object.name = "";
            object.portrait = "";
            object.owner = "";
            object.type = options.enums === String ? "GroupType_Normal" : 0;
            object.memberCount = 0;
            object.extra = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.memberUpdateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.memberUpdateDt = options.longs === String ? "0" : 0;
        }
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            object.targetId = message.targetId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            object.portrait = message.portrait;
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.GroupType[message.type] : message.type;
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            object.memberCount = message.memberCount;
        if (message.extra != null && message.hasOwnProperty("extra"))
            object.extra = message.extra;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        if (message.memberUpdateDt != null && message.hasOwnProperty("memberUpdateDt"))
            if (typeof message.memberUpdateDt === "number")
                object.memberUpdateDt = options.longs === String ? String(message.memberUpdateDt) : message.memberUpdateDt;
            else
                object.memberUpdateDt = options.longs === String ? $util.Long.prototype.toString.call(message.memberUpdateDt) : options.longs === Number ? new $util.LongBits(message.memberUpdateDt.low >>> 0, message.memberUpdateDt.high >>> 0).toNumber() : message.memberUpdateDt;
        return object;
    };

    /**
     * Converts this GroupInfo to JSON.
     * @function toJSON
     * @memberof GroupInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GroupInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GroupInfo;
})();

/**
 * GroupMemberType enum.
 * @exports GroupMemberType
 * @enum {string}
 * @property {number} GroupMemberType_Normal=0 GroupMemberType_Normal value
 * @property {number} GroupMemberType_Manager=1 GroupMemberType_Manager value
 * @property {number} GroupMemberType_Owner=2 GroupMemberType_Owner value
 * @property {number} GroupMemberType_Silent=3 GroupMemberType_Silent value
 * @property {number} GroupMemberType_Removed=4 GroupMemberType_Removed value
 */
$root.GroupMemberType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GroupMemberType_Normal"] = 0;
    values[valuesById[1] = "GroupMemberType_Manager"] = 1;
    values[valuesById[2] = "GroupMemberType_Owner"] = 2;
    values[valuesById[3] = "GroupMemberType_Silent"] = 3;
    values[valuesById[4] = "GroupMemberType_Removed"] = 4;
    return values;
})();

$root.GroupMember = (function() {

    /**
     * Properties of a GroupMember.
     * @exports IGroupMember
     * @interface IGroupMember
     * @property {string} memberId GroupMember memberId
     * @property {string|null} [alias] GroupMember alias
     * @property {GroupMemberType} type GroupMember type
     * @property {number|Long|null} [updateDt] GroupMember updateDt
     */

    /**
     * Constructs a new GroupMember.
     * @exports GroupMember
     * @classdesc Represents a GroupMember.
     * @implements IGroupMember
     * @constructor
     * @param {IGroupMember=} [properties] Properties to set
     */
    function GroupMember(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GroupMember memberId.
     * @member {string} memberId
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.memberId = "";

    /**
     * GroupMember alias.
     * @member {string} alias
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.alias = "";

    /**
     * GroupMember type.
     * @member {GroupMemberType} type
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.type = 0;

    /**
     * GroupMember updateDt.
     * @member {number|Long} updateDt
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GroupMember instance using the specified properties.
     * @function create
     * @memberof GroupMember
     * @static
     * @param {IGroupMember=} [properties] Properties to set
     * @returns {GroupMember} GroupMember instance
     */
    GroupMember.create = function create(properties) {
        return new GroupMember(properties);
    };

    /**
     * Encodes the specified GroupMember message. Does not implicitly {@link GroupMember.verify|verify} messages.
     * @function encode
     * @memberof GroupMember
     * @static
     * @param {IGroupMember} message GroupMember message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupMember.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.memberId);
        if (message.alias != null && message.hasOwnProperty("alias"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.updateDt);
        return writer;
    };

    /**
     * Encodes the specified GroupMember message, length delimited. Does not implicitly {@link GroupMember.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GroupMember
     * @static
     * @param {IGroupMember} message GroupMember message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupMember.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GroupMember message from the specified reader or buffer.
     * @function decode
     * @memberof GroupMember
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GroupMember} GroupMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupMember.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GroupMember();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.memberId = reader.string();
                break;
            case 2:
                message.alias = reader.string();
                break;
            case 3:
                message.type = reader.int32();
                break;
            case 4:
                message.updateDt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("memberId"))
            throw $util.ProtocolError("missing required 'memberId'", { instance: message });
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a GroupMember message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GroupMember
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GroupMember} GroupMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupMember.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GroupMember message.
     * @function verify
     * @memberof GroupMember
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GroupMember.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.memberId))
            return "memberId: string expected";
        if (message.alias != null && message.hasOwnProperty("alias"))
            if (!$util.isString(message.alias))
                return "alias: string expected";
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            break;
        }
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
                return "updateDt: integer|Long expected";
        return null;
    };

    /**
     * Creates a GroupMember message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GroupMember
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GroupMember} GroupMember
     */
    GroupMember.fromObject = function fromObject(object) {
        if (object instanceof $root.GroupMember)
            return object;
        var message = new $root.GroupMember();
        if (object.memberId != null)
            message.memberId = String(object.memberId);
        if (object.alias != null)
            message.alias = String(object.alias);
        switch (object.type) {
        case "GroupMemberType_Normal":
        case 0:
            message.type = 0;
            break;
        case "GroupMemberType_Manager":
        case 1:
            message.type = 1;
            break;
        case "GroupMemberType_Owner":
        case 2:
            message.type = 2;
            break;
        case "GroupMemberType_Silent":
        case 3:
            message.type = 3;
            break;
        case "GroupMemberType_Removed":
        case 4:
            message.type = 4;
            break;
        }
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GroupMember message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GroupMember
     * @static
     * @param {GroupMember} message GroupMember
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GroupMember.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.memberId = "";
            object.alias = "";
            object.type = options.enums === String ? "GroupMemberType_Normal" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
        }
        if (message.memberId != null && message.hasOwnProperty("memberId"))
            object.memberId = message.memberId;
        if (message.alias != null && message.hasOwnProperty("alias"))
            object.alias = message.alias;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.GroupMemberType[message.type] : message.type;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        return object;
    };

    /**
     * Converts this GroupMember to JSON.
     * @function toJSON
     * @memberof GroupMember
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GroupMember.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GroupMember;
})();

$root.Group = (function() {

    /**
     * Properties of a Group.
     * @exports IGroup
     * @interface IGroup
     * @property {IGroupInfo} groupInfo Group groupInfo
     * @property {Array.<IGroupMember>|null} [members] Group members
     */

    /**
     * Constructs a new Group.
     * @exports Group
     * @classdesc Represents a Group.
     * @implements IGroup
     * @constructor
     * @param {IGroup=} [properties] Properties to set
     */
    function Group(properties) {
        this.members = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Group groupInfo.
     * @member {IGroupInfo} groupInfo
     * @memberof Group
     * @instance
     */
    Group.prototype.groupInfo = null;

    /**
     * Group members.
     * @member {Array.<IGroupMember>} members
     * @memberof Group
     * @instance
     */
    Group.prototype.members = $util.emptyArray;

    /**
     * Creates a new Group instance using the specified properties.
     * @function create
     * @memberof Group
     * @static
     * @param {IGroup=} [properties] Properties to set
     * @returns {Group} Group instance
     */
    Group.create = function create(properties) {
        return new Group(properties);
    };

    /**
     * Encodes the specified Group message. Does not implicitly {@link Group.verify|verify} messages.
     * @function encode
     * @memberof Group
     * @static
     * @param {IGroup} message Group message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Group.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.GroupInfo.encode(message.groupInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.members != null && message.members.length)
            for (var i = 0; i < message.members.length; ++i)
                $root.GroupMember.encode(message.members[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Group message, length delimited. Does not implicitly {@link Group.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Group
     * @static
     * @param {IGroup} message Group message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Group.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Group message from the specified reader or buffer.
     * @function decode
     * @memberof Group
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Group} Group
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Group.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Group();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupInfo = $root.GroupInfo.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.members && message.members.length))
                    message.members = [];
                message.members.push($root.GroupMember.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("groupInfo"))
            throw $util.ProtocolError("missing required 'groupInfo'", { instance: message });
        return message;
    };

    /**
     * Decodes a Group message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Group
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Group} Group
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Group.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Group message.
     * @function verify
     * @memberof Group
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Group.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.GroupInfo.verify(message.groupInfo);
            if (error)
                return "groupInfo." + error;
        }
        if (message.members != null && message.hasOwnProperty("members")) {
            if (!Array.isArray(message.members))
                return "members: array expected";
            for (var i = 0; i < message.members.length; ++i) {
                var error = $root.GroupMember.verify(message.members[i]);
                if (error)
                    return "members." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Group message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Group
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Group} Group
     */
    Group.fromObject = function fromObject(object) {
        if (object instanceof $root.Group)
            return object;
        var message = new $root.Group();
        if (object.groupInfo != null) {
            if (typeof object.groupInfo !== "object")
                throw TypeError(".Group.groupInfo: object expected");
            message.groupInfo = $root.GroupInfo.fromObject(object.groupInfo);
        }
        if (object.members) {
            if (!Array.isArray(object.members))
                throw TypeError(".Group.members: array expected");
            message.members = [];
            for (var i = 0; i < object.members.length; ++i) {
                if (typeof object.members[i] !== "object")
                    throw TypeError(".Group.members: object expected");
                message.members[i] = $root.GroupMember.fromObject(object.members[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Group message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Group
     * @static
     * @param {Group} message Group
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Group.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.members = [];
        if (options.defaults)
            object.groupInfo = null;
        if (message.groupInfo != null && message.hasOwnProperty("groupInfo"))
            object.groupInfo = $root.GroupInfo.toObject(message.groupInfo, options);
        if (message.members && message.members.length) {
            object.members = [];
            for (var j = 0; j < message.members.length; ++j)
                object.members[j] = $root.GroupMember.toObject(message.members[j], options);
        }
        return object;
    };

    /**
     * Converts this Group to JSON.
     * @function toJSON
     * @memberof Group
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Group.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Group;
})();

/**
 * ContentType enum.
 * @exports ContentType
 * @enum {string}
 * @property {number} Unknown=0 Unknown value
 * @property {number} Text=1 Text value
 * @property {number} Image=2 Image value
 * @property {number} Voice=3 Voice value
 * @property {number} Location=4 Location value
 * @property {number} Video=5 Video value
 * @property {number} RichMedia=6 RichMedia value
 * @property {number} Custom=7 Custom value
 */
$root.ContentType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Unknown"] = 0;
    values[valuesById[1] = "Text"] = 1;
    values[valuesById[2] = "Image"] = 2;
    values[valuesById[3] = "Voice"] = 3;
    values[valuesById[4] = "Location"] = 4;
    values[valuesById[5] = "Video"] = 5;
    values[valuesById[6] = "RichMedia"] = 6;
    values[valuesById[7] = "Custom"] = 7;
    return values;
})();

$root.MessageContent = (function() {

    /**
     * Properties of a MessageContent.
     * @exports IMessageContent
     * @interface IMessageContent
     * @property {number} type MessageContent type
     * @property {string|null} [searchableContent] MessageContent searchableContent
     * @property {string|null} [pushContent] MessageContent pushContent
     * @property {string|null} [content] MessageContent content
     * @property {Uint8Array|null} [data] MessageContent data
     * @property {number|null} [mediaType] MessageContent mediaType
     * @property {string|null} [remoteMediaUrl] MessageContent remoteMediaUrl
     * @property {number|null} [persistFlag] MessageContent persistFlag
     * @property {number|null} [expireDuration] MessageContent expireDuration
     * @property {number|null} [mentionedType] MessageContent mentionedType
     * @property {Array.<string>|null} [mentionedTarget] MessageContent mentionedTarget
     */

    /**
     * Constructs a new MessageContent.
     * @exports MessageContent
     * @classdesc Represents a MessageContent.
     * @implements IMessageContent
     * @constructor
     * @param {IMessageContent=} [properties] Properties to set
     */
    function MessageContent(properties) {
        this.mentionedTarget = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageContent type.
     * @member {number} type
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.type = 0;

    /**
     * MessageContent searchableContent.
     * @member {string} searchableContent
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.searchableContent = "";

    /**
     * MessageContent pushContent.
     * @member {string} pushContent
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.pushContent = "";

    /**
     * MessageContent content.
     * @member {string} content
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.content = "";

    /**
     * MessageContent data.
     * @member {Uint8Array} data
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.data = $util.newBuffer([]);

    /**
     * MessageContent mediaType.
     * @member {number} mediaType
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.mediaType = 0;

    /**
     * MessageContent remoteMediaUrl.
     * @member {string} remoteMediaUrl
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.remoteMediaUrl = "";

    /**
     * MessageContent persistFlag.
     * @member {number} persistFlag
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.persistFlag = 0;

    /**
     * MessageContent expireDuration.
     * @member {number} expireDuration
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.expireDuration = 0;

    /**
     * MessageContent mentionedType.
     * @member {number} mentionedType
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.mentionedType = 0;

    /**
     * MessageContent mentionedTarget.
     * @member {Array.<string>} mentionedTarget
     * @memberof MessageContent
     * @instance
     */
    MessageContent.prototype.mentionedTarget = $util.emptyArray;

    /**
     * Creates a new MessageContent instance using the specified properties.
     * @function create
     * @memberof MessageContent
     * @static
     * @param {IMessageContent=} [properties] Properties to set
     * @returns {MessageContent} MessageContent instance
     */
    MessageContent.create = function create(properties) {
        return new MessageContent(properties);
    };

    /**
     * Encodes the specified MessageContent message. Does not implicitly {@link MessageContent.verify|verify} messages.
     * @function encode
     * @memberof MessageContent
     * @static
     * @param {IMessageContent} message MessageContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.searchableContent != null && message.hasOwnProperty("searchableContent"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.searchableContent);
        if (message.pushContent != null && message.hasOwnProperty("pushContent"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.pushContent);
        if (message.content != null && message.hasOwnProperty("content"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
        if (message.mediaType != null && message.hasOwnProperty("mediaType"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.mediaType);
        if (message.remoteMediaUrl != null && message.hasOwnProperty("remoteMediaUrl"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.remoteMediaUrl);
        if (message.persistFlag != null && message.hasOwnProperty("persistFlag"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.persistFlag);
        if (message.expireDuration != null && message.hasOwnProperty("expireDuration"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.expireDuration);
        if (message.mentionedType != null && message.hasOwnProperty("mentionedType"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.mentionedType);
        if (message.mentionedTarget != null && message.mentionedTarget.length)
            for (var i = 0; i < message.mentionedTarget.length; ++i)
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.mentionedTarget[i]);
        return writer;
    };

    /**
     * Encodes the specified MessageContent message, length delimited. Does not implicitly {@link MessageContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageContent
     * @static
     * @param {IMessageContent} message MessageContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageContent message from the specified reader or buffer.
     * @function decode
     * @memberof MessageContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageContent} MessageContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageContent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.searchableContent = reader.string();
                break;
            case 3:
                message.pushContent = reader.string();
                break;
            case 4:
                message.content = reader.string();
                break;
            case 5:
                message.data = reader.bytes();
                break;
            case 6:
                message.mediaType = reader.int32();
                break;
            case 7:
                message.remoteMediaUrl = reader.string();
                break;
            case 8:
                message.persistFlag = reader.int32();
                break;
            case 9:
                message.expireDuration = reader.int32();
                break;
            case 10:
                message.mentionedType = reader.int32();
                break;
            case 11:
                if (!(message.mentionedTarget && message.mentionedTarget.length))
                    message.mentionedTarget = [];
                message.mentionedTarget.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a MessageContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageContent} MessageContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageContent message.
     * @function verify
     * @memberof MessageContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        if (message.searchableContent != null && message.hasOwnProperty("searchableContent"))
            if (!$util.isString(message.searchableContent))
                return "searchableContent: string expected";
        if (message.pushContent != null && message.hasOwnProperty("pushContent"))
            if (!$util.isString(message.pushContent))
                return "pushContent: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.mediaType != null && message.hasOwnProperty("mediaType"))
            if (!$util.isInteger(message.mediaType))
                return "mediaType: integer expected";
        if (message.remoteMediaUrl != null && message.hasOwnProperty("remoteMediaUrl"))
            if (!$util.isString(message.remoteMediaUrl))
                return "remoteMediaUrl: string expected";
        if (message.persistFlag != null && message.hasOwnProperty("persistFlag"))
            if (!$util.isInteger(message.persistFlag))
                return "persistFlag: integer expected";
        if (message.expireDuration != null && message.hasOwnProperty("expireDuration"))
            if (!$util.isInteger(message.expireDuration))
                return "expireDuration: integer expected";
        if (message.mentionedType != null && message.hasOwnProperty("mentionedType"))
            if (!$util.isInteger(message.mentionedType))
                return "mentionedType: integer expected";
        if (message.mentionedTarget != null && message.hasOwnProperty("mentionedTarget")) {
            if (!Array.isArray(message.mentionedTarget))
                return "mentionedTarget: array expected";
            for (var i = 0; i < message.mentionedTarget.length; ++i)
                if (!$util.isString(message.mentionedTarget[i]))
                    return "mentionedTarget: string[] expected";
        }
        return null;
    };

    /**
     * Creates a MessageContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageContent} MessageContent
     */
    MessageContent.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageContent)
            return object;
        var message = new $root.MessageContent();
        if (object.type != null)
            message.type = object.type | 0;
        if (object.searchableContent != null)
            message.searchableContent = String(object.searchableContent);
        if (object.pushContent != null)
            message.pushContent = String(object.pushContent);
        if (object.content != null)
            message.content = String(object.content);
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.mediaType != null)
            message.mediaType = object.mediaType | 0;
        if (object.remoteMediaUrl != null)
            message.remoteMediaUrl = String(object.remoteMediaUrl);
        if (object.persistFlag != null)
            message.persistFlag = object.persistFlag | 0;
        if (object.expireDuration != null)
            message.expireDuration = object.expireDuration | 0;
        if (object.mentionedType != null)
            message.mentionedType = object.mentionedType | 0;
        if (object.mentionedTarget) {
            if (!Array.isArray(object.mentionedTarget))
                throw TypeError(".MessageContent.mentionedTarget: array expected");
            message.mentionedTarget = [];
            for (var i = 0; i < object.mentionedTarget.length; ++i)
                message.mentionedTarget[i] = String(object.mentionedTarget[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a MessageContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageContent
     * @static
     * @param {MessageContent} message MessageContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.mentionedTarget = [];
        if (options.defaults) {
            object.type = 0;
            object.searchableContent = "";
            object.pushContent = "";
            object.content = "";
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            object.mediaType = 0;
            object.remoteMediaUrl = "";
            object.persistFlag = 0;
            object.expireDuration = 0;
            object.mentionedType = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.searchableContent != null && message.hasOwnProperty("searchableContent"))
            object.searchableContent = message.searchableContent;
        if (message.pushContent != null && message.hasOwnProperty("pushContent"))
            object.pushContent = message.pushContent;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.mediaType != null && message.hasOwnProperty("mediaType"))
            object.mediaType = message.mediaType;
        if (message.remoteMediaUrl != null && message.hasOwnProperty("remoteMediaUrl"))
            object.remoteMediaUrl = message.remoteMediaUrl;
        if (message.persistFlag != null && message.hasOwnProperty("persistFlag"))
            object.persistFlag = message.persistFlag;
        if (message.expireDuration != null && message.hasOwnProperty("expireDuration"))
            object.expireDuration = message.expireDuration;
        if (message.mentionedType != null && message.hasOwnProperty("mentionedType"))
            object.mentionedType = message.mentionedType;
        if (message.mentionedTarget && message.mentionedTarget.length) {
            object.mentionedTarget = [];
            for (var j = 0; j < message.mentionedTarget.length; ++j)
                object.mentionedTarget[j] = message.mentionedTarget[j];
        }
        return object;
    };

    /**
     * Converts this MessageContent to JSON.
     * @function toJSON
     * @memberof MessageContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MessageContent;
})();

$root.AddGroupMemberRequest = (function() {

    /**
     * Properties of an AddGroupMemberRequest.
     * @exports IAddGroupMemberRequest
     * @interface IAddGroupMemberRequest
     * @property {string} groupId AddGroupMemberRequest groupId
     * @property {Array.<IGroupMember>|null} [addedMember] AddGroupMemberRequest addedMember
     * @property {Array.<number>|null} [toLine] AddGroupMemberRequest toLine
     * @property {IMessageContent|null} [notifyContent] AddGroupMemberRequest notifyContent
     */

    /**
     * Constructs a new AddGroupMemberRequest.
     * @exports AddGroupMemberRequest
     * @classdesc Represents an AddGroupMemberRequest.
     * @implements IAddGroupMemberRequest
     * @constructor
     * @param {IAddGroupMemberRequest=} [properties] Properties to set
     */
    function AddGroupMemberRequest(properties) {
        this.addedMember = [];
        this.toLine = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AddGroupMemberRequest groupId.
     * @member {string} groupId
     * @memberof AddGroupMemberRequest
     * @instance
     */
    AddGroupMemberRequest.prototype.groupId = "";

    /**
     * AddGroupMemberRequest addedMember.
     * @member {Array.<IGroupMember>} addedMember
     * @memberof AddGroupMemberRequest
     * @instance
     */
    AddGroupMemberRequest.prototype.addedMember = $util.emptyArray;

    /**
     * AddGroupMemberRequest toLine.
     * @member {Array.<number>} toLine
     * @memberof AddGroupMemberRequest
     * @instance
     */
    AddGroupMemberRequest.prototype.toLine = $util.emptyArray;

    /**
     * AddGroupMemberRequest notifyContent.
     * @member {IMessageContent|null|undefined} notifyContent
     * @memberof AddGroupMemberRequest
     * @instance
     */
    AddGroupMemberRequest.prototype.notifyContent = null;

    /**
     * Creates a new AddGroupMemberRequest instance using the specified properties.
     * @function create
     * @memberof AddGroupMemberRequest
     * @static
     * @param {IAddGroupMemberRequest=} [properties] Properties to set
     * @returns {AddGroupMemberRequest} AddGroupMemberRequest instance
     */
    AddGroupMemberRequest.create = function create(properties) {
        return new AddGroupMemberRequest(properties);
    };

    /**
     * Encodes the specified AddGroupMemberRequest message. Does not implicitly {@link AddGroupMemberRequest.verify|verify} messages.
     * @function encode
     * @memberof AddGroupMemberRequest
     * @static
     * @param {IAddGroupMemberRequest} message AddGroupMemberRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddGroupMemberRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        if (message.addedMember != null && message.addedMember.length)
            for (var i = 0; i < message.addedMember.length; ++i)
                $root.GroupMember.encode(message.addedMember[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.toLine != null && message.toLine.length)
            for (var i = 0; i < message.toLine.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.toLine[i]);
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            $root.MessageContent.encode(message.notifyContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AddGroupMemberRequest message, length delimited. Does not implicitly {@link AddGroupMemberRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddGroupMemberRequest
     * @static
     * @param {IAddGroupMemberRequest} message AddGroupMemberRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddGroupMemberRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AddGroupMemberRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AddGroupMemberRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddGroupMemberRequest} AddGroupMemberRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddGroupMemberRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AddGroupMemberRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupId = reader.string();
                break;
            case 2:
                if (!(message.addedMember && message.addedMember.length))
                    message.addedMember = [];
                message.addedMember.push($root.GroupMember.decode(reader, reader.uint32()));
                break;
            case 3:
                if (!(message.toLine && message.toLine.length))
                    message.toLine = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.toLine.push(reader.int32());
                } else
                    message.toLine.push(reader.int32());
                break;
            case 4:
                message.notifyContent = $root.MessageContent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("groupId"))
            throw $util.ProtocolError("missing required 'groupId'", { instance: message });
        return message;
    };

    /**
     * Decodes an AddGroupMemberRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddGroupMemberRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddGroupMemberRequest} AddGroupMemberRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddGroupMemberRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AddGroupMemberRequest message.
     * @function verify
     * @memberof AddGroupMemberRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AddGroupMemberRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.groupId))
            return "groupId: string expected";
        if (message.addedMember != null && message.hasOwnProperty("addedMember")) {
            if (!Array.isArray(message.addedMember))
                return "addedMember: array expected";
            for (var i = 0; i < message.addedMember.length; ++i) {
                var error = $root.GroupMember.verify(message.addedMember[i]);
                if (error)
                    return "addedMember." + error;
            }
        }
        if (message.toLine != null && message.hasOwnProperty("toLine")) {
            if (!Array.isArray(message.toLine))
                return "toLine: array expected";
            for (var i = 0; i < message.toLine.length; ++i)
                if (!$util.isInteger(message.toLine[i]))
                    return "toLine: integer[] expected";
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent")) {
            var error = $root.MessageContent.verify(message.notifyContent);
            if (error)
                return "notifyContent." + error;
        }
        return null;
    };

    /**
     * Creates an AddGroupMemberRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddGroupMemberRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddGroupMemberRequest} AddGroupMemberRequest
     */
    AddGroupMemberRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.AddGroupMemberRequest)
            return object;
        var message = new $root.AddGroupMemberRequest();
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        if (object.addedMember) {
            if (!Array.isArray(object.addedMember))
                throw TypeError(".AddGroupMemberRequest.addedMember: array expected");
            message.addedMember = [];
            for (var i = 0; i < object.addedMember.length; ++i) {
                if (typeof object.addedMember[i] !== "object")
                    throw TypeError(".AddGroupMemberRequest.addedMember: object expected");
                message.addedMember[i] = $root.GroupMember.fromObject(object.addedMember[i]);
            }
        }
        if (object.toLine) {
            if (!Array.isArray(object.toLine))
                throw TypeError(".AddGroupMemberRequest.toLine: array expected");
            message.toLine = [];
            for (var i = 0; i < object.toLine.length; ++i)
                message.toLine[i] = object.toLine[i] | 0;
        }
        if (object.notifyContent != null) {
            if (typeof object.notifyContent !== "object")
                throw TypeError(".AddGroupMemberRequest.notifyContent: object expected");
            message.notifyContent = $root.MessageContent.fromObject(object.notifyContent);
        }
        return message;
    };

    /**
     * Creates a plain object from an AddGroupMemberRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddGroupMemberRequest
     * @static
     * @param {AddGroupMemberRequest} message AddGroupMemberRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AddGroupMemberRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.addedMember = [];
            object.toLine = [];
        }
        if (options.defaults) {
            object.groupId = "";
            object.notifyContent = null;
        }
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.addedMember && message.addedMember.length) {
            object.addedMember = [];
            for (var j = 0; j < message.addedMember.length; ++j)
                object.addedMember[j] = $root.GroupMember.toObject(message.addedMember[j], options);
        }
        if (message.toLine && message.toLine.length) {
            object.toLine = [];
            for (var j = 0; j < message.toLine.length; ++j)
                object.toLine[j] = message.toLine[j];
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            object.notifyContent = $root.MessageContent.toObject(message.notifyContent, options);
        return object;
    };

    /**
     * Converts this AddGroupMemberRequest to JSON.
     * @function toJSON
     * @memberof AddGroupMemberRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AddGroupMemberRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AddGroupMemberRequest;
})();

$root.CreateGroupRequest = (function() {

    /**
     * Properties of a CreateGroupRequest.
     * @exports ICreateGroupRequest
     * @interface ICreateGroupRequest
     * @property {IGroup} group CreateGroupRequest group
     * @property {Array.<number>|null} [toLine] CreateGroupRequest toLine
     * @property {IMessageContent|null} [notifyContent] CreateGroupRequest notifyContent
     */

    /**
     * Constructs a new CreateGroupRequest.
     * @exports CreateGroupRequest
     * @classdesc Represents a CreateGroupRequest.
     * @implements ICreateGroupRequest
     * @constructor
     * @param {ICreateGroupRequest=} [properties] Properties to set
     */
    function CreateGroupRequest(properties) {
        this.toLine = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateGroupRequest group.
     * @member {IGroup} group
     * @memberof CreateGroupRequest
     * @instance
     */
    CreateGroupRequest.prototype.group = null;

    /**
     * CreateGroupRequest toLine.
     * @member {Array.<number>} toLine
     * @memberof CreateGroupRequest
     * @instance
     */
    CreateGroupRequest.prototype.toLine = $util.emptyArray;

    /**
     * CreateGroupRequest notifyContent.
     * @member {IMessageContent|null|undefined} notifyContent
     * @memberof CreateGroupRequest
     * @instance
     */
    CreateGroupRequest.prototype.notifyContent = null;

    /**
     * Creates a new CreateGroupRequest instance using the specified properties.
     * @function create
     * @memberof CreateGroupRequest
     * @static
     * @param {ICreateGroupRequest=} [properties] Properties to set
     * @returns {CreateGroupRequest} CreateGroupRequest instance
     */
    CreateGroupRequest.create = function create(properties) {
        return new CreateGroupRequest(properties);
    };

    /**
     * Encodes the specified CreateGroupRequest message. Does not implicitly {@link CreateGroupRequest.verify|verify} messages.
     * @function encode
     * @memberof CreateGroupRequest
     * @static
     * @param {ICreateGroupRequest} message CreateGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateGroupRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.Group.encode(message.group, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.toLine != null && message.toLine.length)
            for (var i = 0; i < message.toLine.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toLine[i]);
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            $root.MessageContent.encode(message.notifyContent, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateGroupRequest message, length delimited. Does not implicitly {@link CreateGroupRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateGroupRequest
     * @static
     * @param {ICreateGroupRequest} message CreateGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateGroupRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateGroupRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreateGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateGroupRequest} CreateGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateGroupRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateGroupRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.group = $root.Group.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.toLine && message.toLine.length))
                    message.toLine = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.toLine.push(reader.int32());
                } else
                    message.toLine.push(reader.int32());
                break;
            case 3:
                message.notifyContent = $root.MessageContent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("group"))
            throw $util.ProtocolError("missing required 'group'", { instance: message });
        return message;
    };

    /**
     * Decodes a CreateGroupRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateGroupRequest} CreateGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateGroupRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateGroupRequest message.
     * @function verify
     * @memberof CreateGroupRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateGroupRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.Group.verify(message.group);
            if (error)
                return "group." + error;
        }
        if (message.toLine != null && message.hasOwnProperty("toLine")) {
            if (!Array.isArray(message.toLine))
                return "toLine: array expected";
            for (var i = 0; i < message.toLine.length; ++i)
                if (!$util.isInteger(message.toLine[i]))
                    return "toLine: integer[] expected";
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent")) {
            var error = $root.MessageContent.verify(message.notifyContent);
            if (error)
                return "notifyContent." + error;
        }
        return null;
    };

    /**
     * Creates a CreateGroupRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateGroupRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateGroupRequest} CreateGroupRequest
     */
    CreateGroupRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateGroupRequest)
            return object;
        var message = new $root.CreateGroupRequest();
        if (object.group != null) {
            if (typeof object.group !== "object")
                throw TypeError(".CreateGroupRequest.group: object expected");
            message.group = $root.Group.fromObject(object.group);
        }
        if (object.toLine) {
            if (!Array.isArray(object.toLine))
                throw TypeError(".CreateGroupRequest.toLine: array expected");
            message.toLine = [];
            for (var i = 0; i < object.toLine.length; ++i)
                message.toLine[i] = object.toLine[i] | 0;
        }
        if (object.notifyContent != null) {
            if (typeof object.notifyContent !== "object")
                throw TypeError(".CreateGroupRequest.notifyContent: object expected");
            message.notifyContent = $root.MessageContent.fromObject(object.notifyContent);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateGroupRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateGroupRequest
     * @static
     * @param {CreateGroupRequest} message CreateGroupRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateGroupRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.toLine = [];
        if (options.defaults) {
            object.group = null;
            object.notifyContent = null;
        }
        if (message.group != null && message.hasOwnProperty("group"))
            object.group = $root.Group.toObject(message.group, options);
        if (message.toLine && message.toLine.length) {
            object.toLine = [];
            for (var j = 0; j < message.toLine.length; ++j)
                object.toLine[j] = message.toLine[j];
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            object.notifyContent = $root.MessageContent.toObject(message.notifyContent, options);
        return object;
    };

    /**
     * Converts this CreateGroupRequest to JSON.
     * @function toJSON
     * @memberof CreateGroupRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateGroupRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateGroupRequest;
})();

$root.DismissGroupRequest = (function() {

    /**
     * Properties of a DismissGroupRequest.
     * @exports IDismissGroupRequest
     * @interface IDismissGroupRequest
     * @property {string} groupId DismissGroupRequest groupId
     * @property {Array.<number>|null} [toLine] DismissGroupRequest toLine
     * @property {IMessageContent|null} [notifyContent] DismissGroupRequest notifyContent
     */

    /**
     * Constructs a new DismissGroupRequest.
     * @exports DismissGroupRequest
     * @classdesc Represents a DismissGroupRequest.
     * @implements IDismissGroupRequest
     * @constructor
     * @param {IDismissGroupRequest=} [properties] Properties to set
     */
    function DismissGroupRequest(properties) {
        this.toLine = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DismissGroupRequest groupId.
     * @member {string} groupId
     * @memberof DismissGroupRequest
     * @instance
     */
    DismissGroupRequest.prototype.groupId = "";

    /**
     * DismissGroupRequest toLine.
     * @member {Array.<number>} toLine
     * @memberof DismissGroupRequest
     * @instance
     */
    DismissGroupRequest.prototype.toLine = $util.emptyArray;

    /**
     * DismissGroupRequest notifyContent.
     * @member {IMessageContent|null|undefined} notifyContent
     * @memberof DismissGroupRequest
     * @instance
     */
    DismissGroupRequest.prototype.notifyContent = null;

    /**
     * Creates a new DismissGroupRequest instance using the specified properties.
     * @function create
     * @memberof DismissGroupRequest
     * @static
     * @param {IDismissGroupRequest=} [properties] Properties to set
     * @returns {DismissGroupRequest} DismissGroupRequest instance
     */
    DismissGroupRequest.create = function create(properties) {
        return new DismissGroupRequest(properties);
    };

    /**
     * Encodes the specified DismissGroupRequest message. Does not implicitly {@link DismissGroupRequest.verify|verify} messages.
     * @function encode
     * @memberof DismissGroupRequest
     * @static
     * @param {IDismissGroupRequest} message DismissGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DismissGroupRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        if (message.toLine != null && message.toLine.length)
            for (var i = 0; i < message.toLine.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toLine[i]);
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            $root.MessageContent.encode(message.notifyContent, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DismissGroupRequest message, length delimited. Does not implicitly {@link DismissGroupRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DismissGroupRequest
     * @static
     * @param {IDismissGroupRequest} message DismissGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DismissGroupRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DismissGroupRequest message from the specified reader or buffer.
     * @function decode
     * @memberof DismissGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DismissGroupRequest} DismissGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DismissGroupRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DismissGroupRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupId = reader.string();
                break;
            case 2:
                if (!(message.toLine && message.toLine.length))
                    message.toLine = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.toLine.push(reader.int32());
                } else
                    message.toLine.push(reader.int32());
                break;
            case 3:
                message.notifyContent = $root.MessageContent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("groupId"))
            throw $util.ProtocolError("missing required 'groupId'", { instance: message });
        return message;
    };

    /**
     * Decodes a DismissGroupRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DismissGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DismissGroupRequest} DismissGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DismissGroupRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DismissGroupRequest message.
     * @function verify
     * @memberof DismissGroupRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DismissGroupRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.groupId))
            return "groupId: string expected";
        if (message.toLine != null && message.hasOwnProperty("toLine")) {
            if (!Array.isArray(message.toLine))
                return "toLine: array expected";
            for (var i = 0; i < message.toLine.length; ++i)
                if (!$util.isInteger(message.toLine[i]))
                    return "toLine: integer[] expected";
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent")) {
            var error = $root.MessageContent.verify(message.notifyContent);
            if (error)
                return "notifyContent." + error;
        }
        return null;
    };

    /**
     * Creates a DismissGroupRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DismissGroupRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DismissGroupRequest} DismissGroupRequest
     */
    DismissGroupRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.DismissGroupRequest)
            return object;
        var message = new $root.DismissGroupRequest();
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        if (object.toLine) {
            if (!Array.isArray(object.toLine))
                throw TypeError(".DismissGroupRequest.toLine: array expected");
            message.toLine = [];
            for (var i = 0; i < object.toLine.length; ++i)
                message.toLine[i] = object.toLine[i] | 0;
        }
        if (object.notifyContent != null) {
            if (typeof object.notifyContent !== "object")
                throw TypeError(".DismissGroupRequest.notifyContent: object expected");
            message.notifyContent = $root.MessageContent.fromObject(object.notifyContent);
        }
        return message;
    };

    /**
     * Creates a plain object from a DismissGroupRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DismissGroupRequest
     * @static
     * @param {DismissGroupRequest} message DismissGroupRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DismissGroupRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.toLine = [];
        if (options.defaults) {
            object.groupId = "";
            object.notifyContent = null;
        }
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.toLine && message.toLine.length) {
            object.toLine = [];
            for (var j = 0; j < message.toLine.length; ++j)
                object.toLine[j] = message.toLine[j];
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            object.notifyContent = $root.MessageContent.toObject(message.notifyContent, options);
        return object;
    };

    /**
     * Converts this DismissGroupRequest to JSON.
     * @function toJSON
     * @memberof DismissGroupRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DismissGroupRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DismissGroupRequest;
})();

/**
 * FriendRequestStatus enum.
 * @exports FriendRequestStatus
 * @enum {string}
 * @property {number} RequestStatus_Sent=0 RequestStatus_Sent value
 * @property {number} RequestStatus_Accepted=1 RequestStatus_Accepted value
 * @property {number} RequestStatus_Rejected=2 RequestStatus_Rejected value
 */
$root.FriendRequestStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RequestStatus_Sent"] = 0;
    values[valuesById[1] = "RequestStatus_Accepted"] = 1;
    values[valuesById[2] = "RequestStatus_Rejected"] = 2;
    return values;
})();

$root.FriendRequest = (function() {

    /**
     * Properties of a FriendRequest.
     * @exports IFriendRequest
     * @interface IFriendRequest
     * @property {string|null} [fromUid] FriendRequest fromUid
     * @property {string} toUid FriendRequest toUid
     * @property {string} reason FriendRequest reason
     * @property {FriendRequestStatus|null} [status] FriendRequest status
     * @property {number|Long|null} [updateDt] FriendRequest updateDt
     * @property {boolean|null} [fromReadStatus] FriendRequest fromReadStatus
     * @property {boolean|null} [toReadStatus] FriendRequest toReadStatus
     */

    /**
     * Constructs a new FriendRequest.
     * @exports FriendRequest
     * @classdesc Represents a FriendRequest.
     * @implements IFriendRequest
     * @constructor
     * @param {IFriendRequest=} [properties] Properties to set
     */
    function FriendRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FriendRequest fromUid.
     * @member {string} fromUid
     * @memberof FriendRequest
     * @instance
     */
    FriendRequest.prototype.fromUid = "";

    /**
     * FriendRequest toUid.
     * @member {string} toUid
     * @memberof FriendRequest
     * @instance
     */
    FriendRequest.prototype.toUid = "";

    /**
     * FriendRequest reason.
     * @member {string} reason
     * @memberof FriendRequest
     * @instance
     */
    FriendRequest.prototype.reason = "";

    /**
     * FriendRequest status.
     * @member {FriendRequestStatus} status
     * @memberof FriendRequest
     * @instance
     */
    FriendRequest.prototype.status = 0;

    /**
     * FriendRequest updateDt.
     * @member {number|Long} updateDt
     * @memberof FriendRequest
     * @instance
     */
    FriendRequest.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FriendRequest fromReadStatus.
     * @member {boolean} fromReadStatus
     * @memberof FriendRequest
     * @instance
     */
    FriendRequest.prototype.fromReadStatus = false;

    /**
     * FriendRequest toReadStatus.
     * @member {boolean} toReadStatus
     * @memberof FriendRequest
     * @instance
     */
    FriendRequest.prototype.toReadStatus = false;

    /**
     * Creates a new FriendRequest instance using the specified properties.
     * @function create
     * @memberof FriendRequest
     * @static
     * @param {IFriendRequest=} [properties] Properties to set
     * @returns {FriendRequest} FriendRequest instance
     */
    FriendRequest.create = function create(properties) {
        return new FriendRequest(properties);
    };

    /**
     * Encodes the specified FriendRequest message. Does not implicitly {@link FriendRequest.verify|verify} messages.
     * @function encode
     * @memberof FriendRequest
     * @static
     * @param {IFriendRequest} message FriendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FriendRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fromUid != null && message.hasOwnProperty("fromUid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fromUid);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.toUid);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.reason);
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.updateDt);
        if (message.fromReadStatus != null && message.hasOwnProperty("fromReadStatus"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.fromReadStatus);
        if (message.toReadStatus != null && message.hasOwnProperty("toReadStatus"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.toReadStatus);
        return writer;
    };

    /**
     * Encodes the specified FriendRequest message, length delimited. Does not implicitly {@link FriendRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FriendRequest
     * @static
     * @param {IFriendRequest} message FriendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FriendRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FriendRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FriendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FriendRequest} FriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FriendRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.fromUid = reader.string();
                break;
            case 2:
                message.toUid = reader.string();
                break;
            case 3:
                message.reason = reader.string();
                break;
            case 4:
                message.status = reader.int32();
                break;
            case 5:
                message.updateDt = reader.int64();
                break;
            case 6:
                message.fromReadStatus = reader.bool();
                break;
            case 7:
                message.toReadStatus = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("toUid"))
            throw $util.ProtocolError("missing required 'toUid'", { instance: message });
        if (!message.hasOwnProperty("reason"))
            throw $util.ProtocolError("missing required 'reason'", { instance: message });
        return message;
    };

    /**
     * Decodes a FriendRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FriendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FriendRequest} FriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FriendRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FriendRequest message.
     * @function verify
     * @memberof FriendRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FriendRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fromUid != null && message.hasOwnProperty("fromUid"))
            if (!$util.isString(message.fromUid))
                return "fromUid: string expected";
        if (!$util.isString(message.toUid))
            return "toUid: string expected";
        if (!$util.isString(message.reason))
            return "reason: string expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
                return "updateDt: integer|Long expected";
        if (message.fromReadStatus != null && message.hasOwnProperty("fromReadStatus"))
            if (typeof message.fromReadStatus !== "boolean")
                return "fromReadStatus: boolean expected";
        if (message.toReadStatus != null && message.hasOwnProperty("toReadStatus"))
            if (typeof message.toReadStatus !== "boolean")
                return "toReadStatus: boolean expected";
        return null;
    };

    /**
     * Creates a FriendRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FriendRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FriendRequest} FriendRequest
     */
    FriendRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.FriendRequest)
            return object;
        var message = new $root.FriendRequest();
        if (object.fromUid != null)
            message.fromUid = String(object.fromUid);
        if (object.toUid != null)
            message.toUid = String(object.toUid);
        if (object.reason != null)
            message.reason = String(object.reason);
        switch (object.status) {
        case "RequestStatus_Sent":
        case 0:
            message.status = 0;
            break;
        case "RequestStatus_Accepted":
        case 1:
            message.status = 1;
            break;
        case "RequestStatus_Rejected":
        case 2:
            message.status = 2;
            break;
        }
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        if (object.fromReadStatus != null)
            message.fromReadStatus = Boolean(object.fromReadStatus);
        if (object.toReadStatus != null)
            message.toReadStatus = Boolean(object.toReadStatus);
        return message;
    };

    /**
     * Creates a plain object from a FriendRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FriendRequest
     * @static
     * @param {FriendRequest} message FriendRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FriendRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.fromUid = "";
            object.toUid = "";
            object.reason = "";
            object.status = options.enums === String ? "RequestStatus_Sent" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
            object.fromReadStatus = false;
            object.toReadStatus = false;
        }
        if (message.fromUid != null && message.hasOwnProperty("fromUid"))
            object.fromUid = message.fromUid;
        if (message.toUid != null && message.hasOwnProperty("toUid"))
            object.toUid = message.toUid;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.FriendRequestStatus[message.status] : message.status;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        if (message.fromReadStatus != null && message.hasOwnProperty("fromReadStatus"))
            object.fromReadStatus = message.fromReadStatus;
        if (message.toReadStatus != null && message.hasOwnProperty("toReadStatus"))
            object.toReadStatus = message.toReadStatus;
        return object;
    };

    /**
     * Converts this FriendRequest to JSON.
     * @function toJSON
     * @memberof FriendRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FriendRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FriendRequest;
})();

$root.GeneralResult = (function() {

    /**
     * Properties of a GeneralResult.
     * @exports IGeneralResult
     * @interface IGeneralResult
     * @property {number} errorCode GeneralResult errorCode
     */

    /**
     * Constructs a new GeneralResult.
     * @exports GeneralResult
     * @classdesc Represents a GeneralResult.
     * @implements IGeneralResult
     * @constructor
     * @param {IGeneralResult=} [properties] Properties to set
     */
    function GeneralResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GeneralResult errorCode.
     * @member {number} errorCode
     * @memberof GeneralResult
     * @instance
     */
    GeneralResult.prototype.errorCode = 0;

    /**
     * Creates a new GeneralResult instance using the specified properties.
     * @function create
     * @memberof GeneralResult
     * @static
     * @param {IGeneralResult=} [properties] Properties to set
     * @returns {GeneralResult} GeneralResult instance
     */
    GeneralResult.create = function create(properties) {
        return new GeneralResult(properties);
    };

    /**
     * Encodes the specified GeneralResult message. Does not implicitly {@link GeneralResult.verify|verify} messages.
     * @function encode
     * @memberof GeneralResult
     * @static
     * @param {IGeneralResult} message GeneralResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GeneralResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
        return writer;
    };

    /**
     * Encodes the specified GeneralResult message, length delimited. Does not implicitly {@link GeneralResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GeneralResult
     * @static
     * @param {IGeneralResult} message GeneralResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GeneralResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GeneralResult message from the specified reader or buffer.
     * @function decode
     * @memberof GeneralResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GeneralResult} GeneralResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GeneralResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GeneralResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.errorCode = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("errorCode"))
            throw $util.ProtocolError("missing required 'errorCode'", { instance: message });
        return message;
    };

    /**
     * Decodes a GeneralResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GeneralResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GeneralResult} GeneralResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GeneralResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GeneralResult message.
     * @function verify
     * @memberof GeneralResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GeneralResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.errorCode))
            return "errorCode: integer expected";
        return null;
    };

    /**
     * Creates a GeneralResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GeneralResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GeneralResult} GeneralResult
     */
    GeneralResult.fromObject = function fromObject(object) {
        if (object instanceof $root.GeneralResult)
            return object;
        var message = new $root.GeneralResult();
        if (object.errorCode != null)
            message.errorCode = object.errorCode | 0;
        return message;
    };

    /**
     * Creates a plain object from a GeneralResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GeneralResult
     * @static
     * @param {GeneralResult} message GeneralResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GeneralResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.errorCode = 0;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            object.errorCode = message.errorCode;
        return object;
    };

    /**
     * Converts this GeneralResult to JSON.
     * @function toJSON
     * @memberof GeneralResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GeneralResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GeneralResult;
})();

$root.GetUploadTokenResult = (function() {

    /**
     * Properties of a GetUploadTokenResult.
     * @exports IGetUploadTokenResult
     * @interface IGetUploadTokenResult
     * @property {string} domain GetUploadTokenResult domain
     * @property {string} token GetUploadTokenResult token
     * @property {string} server GetUploadTokenResult server
     */

    /**
     * Constructs a new GetUploadTokenResult.
     * @exports GetUploadTokenResult
     * @classdesc Represents a GetUploadTokenResult.
     * @implements IGetUploadTokenResult
     * @constructor
     * @param {IGetUploadTokenResult=} [properties] Properties to set
     */
    function GetUploadTokenResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetUploadTokenResult domain.
     * @member {string} domain
     * @memberof GetUploadTokenResult
     * @instance
     */
    GetUploadTokenResult.prototype.domain = "";

    /**
     * GetUploadTokenResult token.
     * @member {string} token
     * @memberof GetUploadTokenResult
     * @instance
     */
    GetUploadTokenResult.prototype.token = "";

    /**
     * GetUploadTokenResult server.
     * @member {string} server
     * @memberof GetUploadTokenResult
     * @instance
     */
    GetUploadTokenResult.prototype.server = "";

    /**
     * Creates a new GetUploadTokenResult instance using the specified properties.
     * @function create
     * @memberof GetUploadTokenResult
     * @static
     * @param {IGetUploadTokenResult=} [properties] Properties to set
     * @returns {GetUploadTokenResult} GetUploadTokenResult instance
     */
    GetUploadTokenResult.create = function create(properties) {
        return new GetUploadTokenResult(properties);
    };

    /**
     * Encodes the specified GetUploadTokenResult message. Does not implicitly {@link GetUploadTokenResult.verify|verify} messages.
     * @function encode
     * @memberof GetUploadTokenResult
     * @static
     * @param {IGetUploadTokenResult} message GetUploadTokenResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUploadTokenResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.domain);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.server);
        return writer;
    };

    /**
     * Encodes the specified GetUploadTokenResult message, length delimited. Does not implicitly {@link GetUploadTokenResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetUploadTokenResult
     * @static
     * @param {IGetUploadTokenResult} message GetUploadTokenResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUploadTokenResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetUploadTokenResult message from the specified reader or buffer.
     * @function decode
     * @memberof GetUploadTokenResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetUploadTokenResult} GetUploadTokenResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUploadTokenResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetUploadTokenResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.domain = reader.string();
                break;
            case 2:
                message.token = reader.string();
                break;
            case 3:
                message.server = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("domain"))
            throw $util.ProtocolError("missing required 'domain'", { instance: message });
        if (!message.hasOwnProperty("token"))
            throw $util.ProtocolError("missing required 'token'", { instance: message });
        if (!message.hasOwnProperty("server"))
            throw $util.ProtocolError("missing required 'server'", { instance: message });
        return message;
    };

    /**
     * Decodes a GetUploadTokenResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetUploadTokenResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetUploadTokenResult} GetUploadTokenResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUploadTokenResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetUploadTokenResult message.
     * @function verify
     * @memberof GetUploadTokenResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetUploadTokenResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.domain))
            return "domain: string expected";
        if (!$util.isString(message.token))
            return "token: string expected";
        if (!$util.isString(message.server))
            return "server: string expected";
        return null;
    };

    /**
     * Creates a GetUploadTokenResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetUploadTokenResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetUploadTokenResult} GetUploadTokenResult
     */
    GetUploadTokenResult.fromObject = function fromObject(object) {
        if (object instanceof $root.GetUploadTokenResult)
            return object;
        var message = new $root.GetUploadTokenResult();
        if (object.domain != null)
            message.domain = String(object.domain);
        if (object.token != null)
            message.token = String(object.token);
        if (object.server != null)
            message.server = String(object.server);
        return message;
    };

    /**
     * Creates a plain object from a GetUploadTokenResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetUploadTokenResult
     * @static
     * @param {GetUploadTokenResult} message GetUploadTokenResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetUploadTokenResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.domain = "";
            object.token = "";
            object.server = "";
        }
        if (message.domain != null && message.hasOwnProperty("domain"))
            object.domain = message.domain;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.server != null && message.hasOwnProperty("server"))
            object.server = message.server;
        return object;
    };

    /**
     * Converts this GetUploadTokenResult to JSON.
     * @function toJSON
     * @memberof GetUploadTokenResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetUploadTokenResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetUploadTokenResult;
})();

$root.HandleFriendRequest = (function() {

    /**
     * Properties of a HandleFriendRequest.
     * @exports IHandleFriendRequest
     * @interface IHandleFriendRequest
     * @property {string} targetUid HandleFriendRequest targetUid
     * @property {number} status HandleFriendRequest status
     */

    /**
     * Constructs a new HandleFriendRequest.
     * @exports HandleFriendRequest
     * @classdesc Represents a HandleFriendRequest.
     * @implements IHandleFriendRequest
     * @constructor
     * @param {IHandleFriendRequest=} [properties] Properties to set
     */
    function HandleFriendRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HandleFriendRequest targetUid.
     * @member {string} targetUid
     * @memberof HandleFriendRequest
     * @instance
     */
    HandleFriendRequest.prototype.targetUid = "";

    /**
     * HandleFriendRequest status.
     * @member {number} status
     * @memberof HandleFriendRequest
     * @instance
     */
    HandleFriendRequest.prototype.status = 0;

    /**
     * Creates a new HandleFriendRequest instance using the specified properties.
     * @function create
     * @memberof HandleFriendRequest
     * @static
     * @param {IHandleFriendRequest=} [properties] Properties to set
     * @returns {HandleFriendRequest} HandleFriendRequest instance
     */
    HandleFriendRequest.create = function create(properties) {
        return new HandleFriendRequest(properties);
    };

    /**
     * Encodes the specified HandleFriendRequest message. Does not implicitly {@link HandleFriendRequest.verify|verify} messages.
     * @function encode
     * @memberof HandleFriendRequest
     * @static
     * @param {IHandleFriendRequest} message HandleFriendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandleFriendRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetUid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
        return writer;
    };

    /**
     * Encodes the specified HandleFriendRequest message, length delimited. Does not implicitly {@link HandleFriendRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandleFriendRequest
     * @static
     * @param {IHandleFriendRequest} message HandleFriendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandleFriendRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HandleFriendRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HandleFriendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandleFriendRequest} HandleFriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandleFriendRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandleFriendRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.targetUid = reader.string();
                break;
            case 2:
                message.status = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("targetUid"))
            throw $util.ProtocolError("missing required 'targetUid'", { instance: message });
        if (!message.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: message });
        return message;
    };

    /**
     * Decodes a HandleFriendRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandleFriendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandleFriendRequest} HandleFriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandleFriendRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HandleFriendRequest message.
     * @function verify
     * @memberof HandleFriendRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HandleFriendRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.targetUid))
            return "targetUid: string expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates a HandleFriendRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HandleFriendRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HandleFriendRequest} HandleFriendRequest
     */
    HandleFriendRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HandleFriendRequest)
            return object;
        var message = new $root.HandleFriendRequest();
        if (object.targetUid != null)
            message.targetUid = String(object.targetUid);
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a HandleFriendRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HandleFriendRequest
     * @static
     * @param {HandleFriendRequest} message HandleFriendRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HandleFriendRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.targetUid = "";
            object.status = 0;
        }
        if (message.targetUid != null && message.hasOwnProperty("targetUid"))
            object.targetUid = message.targetUid;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this HandleFriendRequest to JSON.
     * @function toJSON
     * @memberof HandleFriendRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HandleFriendRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HandleFriendRequest;
})();

$root.IDBuf = (function() {

    /**
     * Properties of a IDBuf.
     * @exports IIDBuf
     * @interface IIDBuf
     * @property {string} id IDBuf id
     */

    /**
     * Constructs a new IDBuf.
     * @exports IDBuf
     * @classdesc Represents a IDBuf.
     * @implements IIDBuf
     * @constructor
     * @param {IIDBuf=} [properties] Properties to set
     */
    function IDBuf(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IDBuf id.
     * @member {string} id
     * @memberof IDBuf
     * @instance
     */
    IDBuf.prototype.id = "";

    /**
     * Creates a new IDBuf instance using the specified properties.
     * @function create
     * @memberof IDBuf
     * @static
     * @param {IIDBuf=} [properties] Properties to set
     * @returns {IDBuf} IDBuf instance
     */
    IDBuf.create = function create(properties) {
        return new IDBuf(properties);
    };

    /**
     * Encodes the specified IDBuf message. Does not implicitly {@link IDBuf.verify|verify} messages.
     * @function encode
     * @memberof IDBuf
     * @static
     * @param {IIDBuf} message IDBuf message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IDBuf.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified IDBuf message, length delimited. Does not implicitly {@link IDBuf.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IDBuf
     * @static
     * @param {IIDBuf} message IDBuf message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IDBuf.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IDBuf message from the specified reader or buffer.
     * @function decode
     * @memberof IDBuf
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IDBuf} IDBuf
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IDBuf.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IDBuf();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        return message;
    };

    /**
     * Decodes a IDBuf message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IDBuf
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IDBuf} IDBuf
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IDBuf.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IDBuf message.
     * @function verify
     * @memberof IDBuf
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IDBuf.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.id))
            return "id: string expected";
        return null;
    };

    /**
     * Creates a IDBuf message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IDBuf
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IDBuf} IDBuf
     */
    IDBuf.fromObject = function fromObject(object) {
        if (object instanceof $root.IDBuf)
            return object;
        var message = new $root.IDBuf();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a IDBuf message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IDBuf
     * @static
     * @param {IDBuf} message IDBuf
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IDBuf.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this IDBuf to JSON.
     * @function toJSON
     * @memberof IDBuf
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IDBuf.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IDBuf;
})();

$root.IDListBuf = (function() {

    /**
     * Properties of a IDListBuf.
     * @exports IIDListBuf
     * @interface IIDListBuf
     * @property {Array.<string>|null} [id] IDListBuf id
     */

    /**
     * Constructs a new IDListBuf.
     * @exports IDListBuf
     * @classdesc Represents a IDListBuf.
     * @implements IIDListBuf
     * @constructor
     * @param {IIDListBuf=} [properties] Properties to set
     */
    function IDListBuf(properties) {
        this.id = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IDListBuf id.
     * @member {Array.<string>} id
     * @memberof IDListBuf
     * @instance
     */
    IDListBuf.prototype.id = $util.emptyArray;

    /**
     * Creates a new IDListBuf instance using the specified properties.
     * @function create
     * @memberof IDListBuf
     * @static
     * @param {IIDListBuf=} [properties] Properties to set
     * @returns {IDListBuf} IDListBuf instance
     */
    IDListBuf.create = function create(properties) {
        return new IDListBuf(properties);
    };

    /**
     * Encodes the specified IDListBuf message. Does not implicitly {@link IDListBuf.verify|verify} messages.
     * @function encode
     * @memberof IDListBuf
     * @static
     * @param {IIDListBuf} message IDListBuf message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IDListBuf.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.id.length)
            for (var i = 0; i < message.id.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id[i]);
        return writer;
    };

    /**
     * Encodes the specified IDListBuf message, length delimited. Does not implicitly {@link IDListBuf.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IDListBuf
     * @static
     * @param {IIDListBuf} message IDListBuf message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IDListBuf.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IDListBuf message from the specified reader or buffer.
     * @function decode
     * @memberof IDListBuf
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IDListBuf} IDListBuf
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IDListBuf.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IDListBuf();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.id && message.id.length))
                    message.id = [];
                message.id.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a IDListBuf message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IDListBuf
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IDListBuf} IDListBuf
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IDListBuf.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IDListBuf message.
     * @function verify
     * @memberof IDListBuf
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IDListBuf.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id")) {
            if (!Array.isArray(message.id))
                return "id: array expected";
            for (var i = 0; i < message.id.length; ++i)
                if (!$util.isString(message.id[i]))
                    return "id: string[] expected";
        }
        return null;
    };

    /**
     * Creates a IDListBuf message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IDListBuf
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IDListBuf} IDListBuf
     */
    IDListBuf.fromObject = function fromObject(object) {
        if (object instanceof $root.IDListBuf)
            return object;
        var message = new $root.IDListBuf();
        if (object.id) {
            if (!Array.isArray(object.id))
                throw TypeError(".IDListBuf.id: array expected");
            message.id = [];
            for (var i = 0; i < object.id.length; ++i)
                message.id[i] = String(object.id[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a IDListBuf message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IDListBuf
     * @static
     * @param {IDListBuf} message IDListBuf
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IDListBuf.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.id = [];
        if (message.id && message.id.length) {
            object.id = [];
            for (var j = 0; j < message.id.length; ++j)
                object.id[j] = message.id[j];
        }
        return object;
    };

    /**
     * Converts this IDListBuf to JSON.
     * @function toJSON
     * @memberof IDListBuf
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IDListBuf.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IDListBuf;
})();

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {IConversation} conversation Message conversation
     * @property {string} fromUser Message fromUser
     * @property {IMessageContent} content Message content
     * @property {number|Long|null} [messageId] Message messageId
     * @property {number|Long|null} [serverTimestamp] Message serverTimestamp
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message conversation.
     * @member {IConversation} conversation
     * @memberof Message
     * @instance
     */
    Message.prototype.conversation = null;

    /**
     * Message fromUser.
     * @member {string} fromUser
     * @memberof Message
     * @instance
     */
    Message.prototype.fromUser = "";

    /**
     * Message content.
     * @member {IMessageContent} content
     * @memberof Message
     * @instance
     */
    Message.prototype.content = null;

    /**
     * Message messageId.
     * @member {number|Long} messageId
     * @memberof Message
     * @instance
     */
    Message.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Message serverTimestamp.
     * @member {number|Long} serverTimestamp
     * @memberof Message
     * @instance
     */
    Message.prototype.serverTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.Conversation.encode(message.conversation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromUser);
        $root.MessageContent.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.messageId);
        if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.serverTimestamp);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.conversation = $root.Conversation.decode(reader, reader.uint32());
                break;
            case 2:
                message.fromUser = reader.string();
                break;
            case 3:
                message.content = $root.MessageContent.decode(reader, reader.uint32());
                break;
            case 4:
                message.messageId = reader.int64();
                break;
            case 5:
                message.serverTimestamp = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("conversation"))
            throw $util.ProtocolError("missing required 'conversation'", { instance: message });
        if (!message.hasOwnProperty("fromUser"))
            throw $util.ProtocolError("missing required 'fromUser'", { instance: message });
        if (!message.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: message });
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.Conversation.verify(message.conversation);
            if (error)
                return "conversation." + error;
        }
        if (!$util.isString(message.fromUser))
            return "fromUser: string expected";
        {
            var error = $root.MessageContent.verify(message.content);
            if (error)
                return "content." + error;
        }
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            if (!$util.isInteger(message.messageId) && !(message.messageId && $util.isInteger(message.messageId.low) && $util.isInteger(message.messageId.high)))
                return "messageId: integer|Long expected";
        if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
            if (!$util.isInteger(message.serverTimestamp) && !(message.serverTimestamp && $util.isInteger(message.serverTimestamp.low) && $util.isInteger(message.serverTimestamp.high)))
                return "serverTimestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.conversation != null) {
            if (typeof object.conversation !== "object")
                throw TypeError(".Message.conversation: object expected");
            message.conversation = $root.Conversation.fromObject(object.conversation);
        }
        if (object.fromUser != null)
            message.fromUser = String(object.fromUser);
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".Message.content: object expected");
            message.content = $root.MessageContent.fromObject(object.content);
        }
        if (object.messageId != null)
            if ($util.Long)
                (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = false;
            else if (typeof object.messageId === "string")
                message.messageId = parseInt(object.messageId, 10);
            else if (typeof object.messageId === "number")
                message.messageId = object.messageId;
            else if (typeof object.messageId === "object")
                message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber();
        if (object.serverTimestamp != null)
            if ($util.Long)
                (message.serverTimestamp = $util.Long.fromValue(object.serverTimestamp)).unsigned = false;
            else if (typeof object.serverTimestamp === "string")
                message.serverTimestamp = parseInt(object.serverTimestamp, 10);
            else if (typeof object.serverTimestamp === "number")
                message.serverTimestamp = object.serverTimestamp;
            else if (typeof object.serverTimestamp === "object")
                message.serverTimestamp = new $util.LongBits(object.serverTimestamp.low >>> 0, object.serverTimestamp.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.conversation = null;
            object.fromUser = "";
            object.content = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.messageId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serverTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTimestamp = options.longs === String ? "0" : 0;
        }
        if (message.conversation != null && message.hasOwnProperty("conversation"))
            object.conversation = $root.Conversation.toObject(message.conversation, options);
        if (message.fromUser != null && message.hasOwnProperty("fromUser"))
            object.fromUser = message.fromUser;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.MessageContent.toObject(message.content, options);
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            if (typeof message.messageId === "number")
                object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
            else
                object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber() : message.messageId;
        if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
            if (typeof message.serverTimestamp === "number")
                object.serverTimestamp = options.longs === String ? String(message.serverTimestamp) : message.serverTimestamp;
            else
                object.serverTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.serverTimestamp) : options.longs === Number ? new $util.LongBits(message.serverTimestamp.low >>> 0, message.serverTimestamp.high >>> 0).toNumber() : message.serverTimestamp;
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Message;
})();

$root.User = (function() {

    /**
     * Properties of a User.
     * @exports IUser
     * @interface IUser
     * @property {string} uid User uid
     * @property {string|null} [name] User name
     * @property {string|null} [displayName] User displayName
     * @property {string|null} [portrait] User portrait
     * @property {string|null} [mobile] User mobile
     * @property {string|null} [email] User email
     * @property {string|null} [address] User address
     * @property {string|null} [company] User company
     * @property {string|null} [extra] User extra
     * @property {number|Long|null} [updateDt] User updateDt
     */

    /**
     * Constructs a new User.
     * @exports User
     * @classdesc Represents a User.
     * @implements IUser
     * @constructor
     * @param {IUser=} [properties] Properties to set
     */
    function User(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * User uid.
     * @member {string} uid
     * @memberof User
     * @instance
     */
    User.prototype.uid = "";

    /**
     * User name.
     * @member {string} name
     * @memberof User
     * @instance
     */
    User.prototype.name = "";

    /**
     * User displayName.
     * @member {string} displayName
     * @memberof User
     * @instance
     */
    User.prototype.displayName = "";

    /**
     * User portrait.
     * @member {string} portrait
     * @memberof User
     * @instance
     */
    User.prototype.portrait = "";

    /**
     * User mobile.
     * @member {string} mobile
     * @memberof User
     * @instance
     */
    User.prototype.mobile = "";

    /**
     * User email.
     * @member {string} email
     * @memberof User
     * @instance
     */
    User.prototype.email = "";

    /**
     * User address.
     * @member {string} address
     * @memberof User
     * @instance
     */
    User.prototype.address = "";

    /**
     * User company.
     * @member {string} company
     * @memberof User
     * @instance
     */
    User.prototype.company = "";

    /**
     * User extra.
     * @member {string} extra
     * @memberof User
     * @instance
     */
    User.prototype.extra = "";

    /**
     * User updateDt.
     * @member {number|Long} updateDt
     * @memberof User
     * @instance
     */
    User.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new User instance using the specified properties.
     * @function create
     * @memberof User
     * @static
     * @param {IUser=} [properties] Properties to set
     * @returns {User} User instance
     */
    User.create = function create(properties) {
        return new User(properties);
    };

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @function encode
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.displayName != null && message.hasOwnProperty("displayName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.portrait);
        if (message.mobile != null && message.hasOwnProperty("mobile"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.mobile);
        if (message.email != null && message.hasOwnProperty("email"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.email);
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.address);
        if (message.company != null && message.hasOwnProperty("company"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.company);
        if (message.extra != null && message.hasOwnProperty("extra"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.extra);
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.updateDt);
        return writer;
    };

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @function encodeDelimited
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a User message from the specified reader or buffer.
     * @function decode
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.User();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.displayName = reader.string();
                break;
            case 4:
                message.portrait = reader.string();
                break;
            case 5:
                message.mobile = reader.string();
                break;
            case 6:
                message.email = reader.string();
                break;
            case 7:
                message.address = reader.string();
                break;
            case 8:
                message.company = reader.string();
                break;
            case 9:
                message.extra = reader.string();
                break;
            case 10:
                message.updateDt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: message });
        return message;
    };

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a User message.
     * @function verify
     * @memberof User
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    User.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.uid))
            return "uid: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.displayName != null && message.hasOwnProperty("displayName"))
            if (!$util.isString(message.displayName))
                return "displayName: string expected";
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            if (!$util.isString(message.portrait))
                return "portrait: string expected";
        if (message.mobile != null && message.hasOwnProperty("mobile"))
            if (!$util.isString(message.mobile))
                return "mobile: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isString(message.address))
                return "address: string expected";
        if (message.company != null && message.hasOwnProperty("company"))
            if (!$util.isString(message.company))
                return "company: string expected";
        if (message.extra != null && message.hasOwnProperty("extra"))
            if (!$util.isString(message.extra))
                return "extra: string expected";
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
                return "updateDt: integer|Long expected";
        return null;
    };

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof User
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {User} User
     */
    User.fromObject = function fromObject(object) {
        if (object instanceof $root.User)
            return object;
        var message = new $root.User();
        if (object.uid != null)
            message.uid = String(object.uid);
        if (object.name != null)
            message.name = String(object.name);
        if (object.displayName != null)
            message.displayName = String(object.displayName);
        if (object.portrait != null)
            message.portrait = String(object.portrait);
        if (object.mobile != null)
            message.mobile = String(object.mobile);
        if (object.email != null)
            message.email = String(object.email);
        if (object.address != null)
            message.address = String(object.address);
        if (object.company != null)
            message.company = String(object.company);
        if (object.extra != null)
            message.extra = String(object.extra);
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @function toObject
     * @memberof User
     * @static
     * @param {User} message User
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uid = "";
            object.name = "";
            object.displayName = "";
            object.portrait = "";
            object.mobile = "";
            object.email = "";
            object.address = "";
            object.company = "";
            object.extra = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.displayName != null && message.hasOwnProperty("displayName"))
            object.displayName = message.displayName;
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            object.portrait = message.portrait;
        if (message.mobile != null && message.hasOwnProperty("mobile"))
            object.mobile = message.mobile;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        if (message.company != null && message.hasOwnProperty("company"))
            object.company = message.company;
        if (message.extra != null && message.hasOwnProperty("extra"))
            object.extra = message.extra;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        return object;
    };

    /**
     * Converts this User to JSON.
     * @function toJSON
     * @memberof User
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return User;
})();

/**
 * Platform enum.
 * @exports Platform
 * @enum {string}
 * @property {number} Platform_UNSET=0 Platform_UNSET value
 * @property {number} Platform_iOS=1 Platform_iOS value
 * @property {number} Platform_Android=2 Platform_Android value
 * @property {number} Platform_Windows=3 Platform_Windows value
 * @property {number} Platform_OSX=4 Platform_OSX value
 * @property {number} Platform_WEB=5 Platform_WEB value
 */
$root.Platform = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Platform_UNSET"] = 0;
    values[valuesById[1] = "Platform_iOS"] = 1;
    values[valuesById[2] = "Platform_Android"] = 2;
    values[valuesById[3] = "Platform_Windows"] = 3;
    values[valuesById[4] = "Platform_OSX"] = 4;
    values[valuesById[5] = "Platform_WEB"] = 5;
    return values;
})();

$root.UploadDeviceTokenRequest = (function() {

    /**
     * Properties of an UploadDeviceTokenRequest.
     * @exports IUploadDeviceTokenRequest
     * @interface IUploadDeviceTokenRequest
     * @property {Platform} platform UploadDeviceTokenRequest platform
     * @property {string} appName UploadDeviceTokenRequest appName
     * @property {string} deviceToken UploadDeviceTokenRequest deviceToken
     * @property {number} pushType UploadDeviceTokenRequest pushType
     */

    /**
     * Constructs a new UploadDeviceTokenRequest.
     * @exports UploadDeviceTokenRequest
     * @classdesc Represents an UploadDeviceTokenRequest.
     * @implements IUploadDeviceTokenRequest
     * @constructor
     * @param {IUploadDeviceTokenRequest=} [properties] Properties to set
     */
    function UploadDeviceTokenRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UploadDeviceTokenRequest platform.
     * @member {Platform} platform
     * @memberof UploadDeviceTokenRequest
     * @instance
     */
    UploadDeviceTokenRequest.prototype.platform = 0;

    /**
     * UploadDeviceTokenRequest appName.
     * @member {string} appName
     * @memberof UploadDeviceTokenRequest
     * @instance
     */
    UploadDeviceTokenRequest.prototype.appName = "";

    /**
     * UploadDeviceTokenRequest deviceToken.
     * @member {string} deviceToken
     * @memberof UploadDeviceTokenRequest
     * @instance
     */
    UploadDeviceTokenRequest.prototype.deviceToken = "";

    /**
     * UploadDeviceTokenRequest pushType.
     * @member {number} pushType
     * @memberof UploadDeviceTokenRequest
     * @instance
     */
    UploadDeviceTokenRequest.prototype.pushType = 0;

    /**
     * Creates a new UploadDeviceTokenRequest instance using the specified properties.
     * @function create
     * @memberof UploadDeviceTokenRequest
     * @static
     * @param {IUploadDeviceTokenRequest=} [properties] Properties to set
     * @returns {UploadDeviceTokenRequest} UploadDeviceTokenRequest instance
     */
    UploadDeviceTokenRequest.create = function create(properties) {
        return new UploadDeviceTokenRequest(properties);
    };

    /**
     * Encodes the specified UploadDeviceTokenRequest message. Does not implicitly {@link UploadDeviceTokenRequest.verify|verify} messages.
     * @function encode
     * @memberof UploadDeviceTokenRequest
     * @static
     * @param {IUploadDeviceTokenRequest} message UploadDeviceTokenRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UploadDeviceTokenRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platform);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appName);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.deviceToken);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pushType);
        return writer;
    };

    /**
     * Encodes the specified UploadDeviceTokenRequest message, length delimited. Does not implicitly {@link UploadDeviceTokenRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UploadDeviceTokenRequest
     * @static
     * @param {IUploadDeviceTokenRequest} message UploadDeviceTokenRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UploadDeviceTokenRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UploadDeviceTokenRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UploadDeviceTokenRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UploadDeviceTokenRequest} UploadDeviceTokenRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UploadDeviceTokenRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UploadDeviceTokenRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.platform = reader.int32();
                break;
            case 2:
                message.appName = reader.string();
                break;
            case 3:
                message.deviceToken = reader.string();
                break;
            case 4:
                message.pushType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("platform"))
            throw $util.ProtocolError("missing required 'platform'", { instance: message });
        if (!message.hasOwnProperty("appName"))
            throw $util.ProtocolError("missing required 'appName'", { instance: message });
        if (!message.hasOwnProperty("deviceToken"))
            throw $util.ProtocolError("missing required 'deviceToken'", { instance: message });
        if (!message.hasOwnProperty("pushType"))
            throw $util.ProtocolError("missing required 'pushType'", { instance: message });
        return message;
    };

    /**
     * Decodes an UploadDeviceTokenRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UploadDeviceTokenRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UploadDeviceTokenRequest} UploadDeviceTokenRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UploadDeviceTokenRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UploadDeviceTokenRequest message.
     * @function verify
     * @memberof UploadDeviceTokenRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UploadDeviceTokenRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        switch (message.platform) {
        default:
            return "platform: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        }
        if (!$util.isString(message.appName))
            return "appName: string expected";
        if (!$util.isString(message.deviceToken))
            return "deviceToken: string expected";
        if (!$util.isInteger(message.pushType))
            return "pushType: integer expected";
        return null;
    };

    /**
     * Creates an UploadDeviceTokenRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UploadDeviceTokenRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UploadDeviceTokenRequest} UploadDeviceTokenRequest
     */
    UploadDeviceTokenRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UploadDeviceTokenRequest)
            return object;
        var message = new $root.UploadDeviceTokenRequest();
        switch (object.platform) {
        case "Platform_UNSET":
        case 0:
            message.platform = 0;
            break;
        case "Platform_iOS":
        case 1:
            message.platform = 1;
            break;
        case "Platform_Android":
        case 2:
            message.platform = 2;
            break;
        case "Platform_Windows":
        case 3:
            message.platform = 3;
            break;
        case "Platform_OSX":
        case 4:
            message.platform = 4;
            break;
        case "Platform_WEB":
        case 5:
            message.platform = 5;
            break;
        }
        if (object.appName != null)
            message.appName = String(object.appName);
        if (object.deviceToken != null)
            message.deviceToken = String(object.deviceToken);
        if (object.pushType != null)
            message.pushType = object.pushType | 0;
        return message;
    };

    /**
     * Creates a plain object from an UploadDeviceTokenRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UploadDeviceTokenRequest
     * @static
     * @param {UploadDeviceTokenRequest} message UploadDeviceTokenRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UploadDeviceTokenRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.platform = options.enums === String ? "Platform_UNSET" : 0;
            object.appName = "";
            object.deviceToken = "";
            object.pushType = 0;
        }
        if (message.platform != null && message.hasOwnProperty("platform"))
            object.platform = options.enums === String ? $root.Platform[message.platform] : message.platform;
        if (message.appName != null && message.hasOwnProperty("appName"))
            object.appName = message.appName;
        if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
            object.deviceToken = message.deviceToken;
        if (message.pushType != null && message.hasOwnProperty("pushType"))
            object.pushType = message.pushType;
        return object;
    };

    /**
     * Converts this UploadDeviceTokenRequest to JSON.
     * @function toJSON
     * @memberof UploadDeviceTokenRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UploadDeviceTokenRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UploadDeviceTokenRequest;
})();

$root.ModifyGroupInfoRequest = (function() {

    /**
     * Properties of a ModifyGroupInfoRequest.
     * @exports IModifyGroupInfoRequest
     * @interface IModifyGroupInfoRequest
     * @property {IGroupInfo} groupInfo ModifyGroupInfoRequest groupInfo
     * @property {Array.<number>|null} [toLine] ModifyGroupInfoRequest toLine
     * @property {IMessageContent|null} [notifyContent] ModifyGroupInfoRequest notifyContent
     */

    /**
     * Constructs a new ModifyGroupInfoRequest.
     * @exports ModifyGroupInfoRequest
     * @classdesc Represents a ModifyGroupInfoRequest.
     * @implements IModifyGroupInfoRequest
     * @constructor
     * @param {IModifyGroupInfoRequest=} [properties] Properties to set
     */
    function ModifyGroupInfoRequest(properties) {
        this.toLine = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModifyGroupInfoRequest groupInfo.
     * @member {IGroupInfo} groupInfo
     * @memberof ModifyGroupInfoRequest
     * @instance
     */
    ModifyGroupInfoRequest.prototype.groupInfo = null;

    /**
     * ModifyGroupInfoRequest toLine.
     * @member {Array.<number>} toLine
     * @memberof ModifyGroupInfoRequest
     * @instance
     */
    ModifyGroupInfoRequest.prototype.toLine = $util.emptyArray;

    /**
     * ModifyGroupInfoRequest notifyContent.
     * @member {IMessageContent|null|undefined} notifyContent
     * @memberof ModifyGroupInfoRequest
     * @instance
     */
    ModifyGroupInfoRequest.prototype.notifyContent = null;

    /**
     * Creates a new ModifyGroupInfoRequest instance using the specified properties.
     * @function create
     * @memberof ModifyGroupInfoRequest
     * @static
     * @param {IModifyGroupInfoRequest=} [properties] Properties to set
     * @returns {ModifyGroupInfoRequest} ModifyGroupInfoRequest instance
     */
    ModifyGroupInfoRequest.create = function create(properties) {
        return new ModifyGroupInfoRequest(properties);
    };

    /**
     * Encodes the specified ModifyGroupInfoRequest message. Does not implicitly {@link ModifyGroupInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof ModifyGroupInfoRequest
     * @static
     * @param {IModifyGroupInfoRequest} message ModifyGroupInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyGroupInfoRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.GroupInfo.encode(message.groupInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.toLine != null && message.toLine.length)
            for (var i = 0; i < message.toLine.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toLine[i]);
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            $root.MessageContent.encode(message.notifyContent, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ModifyGroupInfoRequest message, length delimited. Does not implicitly {@link ModifyGroupInfoRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModifyGroupInfoRequest
     * @static
     * @param {IModifyGroupInfoRequest} message ModifyGroupInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyGroupInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModifyGroupInfoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ModifyGroupInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModifyGroupInfoRequest} ModifyGroupInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyGroupInfoRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModifyGroupInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupInfo = $root.GroupInfo.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.toLine && message.toLine.length))
                    message.toLine = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.toLine.push(reader.int32());
                } else
                    message.toLine.push(reader.int32());
                break;
            case 3:
                message.notifyContent = $root.MessageContent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("groupInfo"))
            throw $util.ProtocolError("missing required 'groupInfo'", { instance: message });
        return message;
    };

    /**
     * Decodes a ModifyGroupInfoRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModifyGroupInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModifyGroupInfoRequest} ModifyGroupInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyGroupInfoRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModifyGroupInfoRequest message.
     * @function verify
     * @memberof ModifyGroupInfoRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModifyGroupInfoRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.GroupInfo.verify(message.groupInfo);
            if (error)
                return "groupInfo." + error;
        }
        if (message.toLine != null && message.hasOwnProperty("toLine")) {
            if (!Array.isArray(message.toLine))
                return "toLine: array expected";
            for (var i = 0; i < message.toLine.length; ++i)
                if (!$util.isInteger(message.toLine[i]))
                    return "toLine: integer[] expected";
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent")) {
            var error = $root.MessageContent.verify(message.notifyContent);
            if (error)
                return "notifyContent." + error;
        }
        return null;
    };

    /**
     * Creates a ModifyGroupInfoRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModifyGroupInfoRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifyGroupInfoRequest} ModifyGroupInfoRequest
     */
    ModifyGroupInfoRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ModifyGroupInfoRequest)
            return object;
        var message = new $root.ModifyGroupInfoRequest();
        if (object.groupInfo != null) {
            if (typeof object.groupInfo !== "object")
                throw TypeError(".ModifyGroupInfoRequest.groupInfo: object expected");
            message.groupInfo = $root.GroupInfo.fromObject(object.groupInfo);
        }
        if (object.toLine) {
            if (!Array.isArray(object.toLine))
                throw TypeError(".ModifyGroupInfoRequest.toLine: array expected");
            message.toLine = [];
            for (var i = 0; i < object.toLine.length; ++i)
                message.toLine[i] = object.toLine[i] | 0;
        }
        if (object.notifyContent != null) {
            if (typeof object.notifyContent !== "object")
                throw TypeError(".ModifyGroupInfoRequest.notifyContent: object expected");
            message.notifyContent = $root.MessageContent.fromObject(object.notifyContent);
        }
        return message;
    };

    /**
     * Creates a plain object from a ModifyGroupInfoRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModifyGroupInfoRequest
     * @static
     * @param {ModifyGroupInfoRequest} message ModifyGroupInfoRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModifyGroupInfoRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.toLine = [];
        if (options.defaults) {
            object.groupInfo = null;
            object.notifyContent = null;
        }
        if (message.groupInfo != null && message.hasOwnProperty("groupInfo"))
            object.groupInfo = $root.GroupInfo.toObject(message.groupInfo, options);
        if (message.toLine && message.toLine.length) {
            object.toLine = [];
            for (var j = 0; j < message.toLine.length; ++j)
                object.toLine[j] = message.toLine[j];
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            object.notifyContent = $root.MessageContent.toObject(message.notifyContent, options);
        return object;
    };

    /**
     * Converts this ModifyGroupInfoRequest to JSON.
     * @function toJSON
     * @memberof ModifyGroupInfoRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModifyGroupInfoRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModifyGroupInfoRequest;
})();

$root.InfoEntry = (function() {

    /**
     * Properties of an InfoEntry.
     * @exports IInfoEntry
     * @interface IInfoEntry
     * @property {number} type InfoEntry type
     * @property {string} value InfoEntry value
     */

    /**
     * Constructs a new InfoEntry.
     * @exports InfoEntry
     * @classdesc Represents an InfoEntry.
     * @implements IInfoEntry
     * @constructor
     * @param {IInfoEntry=} [properties] Properties to set
     */
    function InfoEntry(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InfoEntry type.
     * @member {number} type
     * @memberof InfoEntry
     * @instance
     */
    InfoEntry.prototype.type = 0;

    /**
     * InfoEntry value.
     * @member {string} value
     * @memberof InfoEntry
     * @instance
     */
    InfoEntry.prototype.value = "";

    /**
     * Creates a new InfoEntry instance using the specified properties.
     * @function create
     * @memberof InfoEntry
     * @static
     * @param {IInfoEntry=} [properties] Properties to set
     * @returns {InfoEntry} InfoEntry instance
     */
    InfoEntry.create = function create(properties) {
        return new InfoEntry(properties);
    };

    /**
     * Encodes the specified InfoEntry message. Does not implicitly {@link InfoEntry.verify|verify} messages.
     * @function encode
     * @memberof InfoEntry
     * @static
     * @param {IInfoEntry} message InfoEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfoEntry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified InfoEntry message, length delimited. Does not implicitly {@link InfoEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfoEntry
     * @static
     * @param {IInfoEntry} message InfoEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfoEntry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfoEntry message from the specified reader or buffer.
     * @function decode
     * @memberof InfoEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfoEntry} InfoEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfoEntry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfoEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.value = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
        return message;
    };

    /**
     * Decodes an InfoEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfoEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfoEntry} InfoEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfoEntry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfoEntry message.
     * @function verify
     * @memberof InfoEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfoEntry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        if (!$util.isString(message.value))
            return "value: string expected";
        return null;
    };

    /**
     * Creates an InfoEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfoEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfoEntry} InfoEntry
     */
    InfoEntry.fromObject = function fromObject(object) {
        if (object instanceof $root.InfoEntry)
            return object;
        var message = new $root.InfoEntry();
        if (object.type != null)
            message.type = object.type | 0;
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from an InfoEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfoEntry
     * @static
     * @param {InfoEntry} message InfoEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfoEntry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = 0;
            object.value = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this InfoEntry to JSON.
     * @function toJSON
     * @memberof InfoEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfoEntry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfoEntry;
})();

$root.ModifyMyInfoRequest = (function() {

    /**
     * Properties of a ModifyMyInfoRequest.
     * @exports IModifyMyInfoRequest
     * @interface IModifyMyInfoRequest
     * @property {Array.<IInfoEntry>|null} [entry] ModifyMyInfoRequest entry
     */

    /**
     * Constructs a new ModifyMyInfoRequest.
     * @exports ModifyMyInfoRequest
     * @classdesc Represents a ModifyMyInfoRequest.
     * @implements IModifyMyInfoRequest
     * @constructor
     * @param {IModifyMyInfoRequest=} [properties] Properties to set
     */
    function ModifyMyInfoRequest(properties) {
        this.entry = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModifyMyInfoRequest entry.
     * @member {Array.<IInfoEntry>} entry
     * @memberof ModifyMyInfoRequest
     * @instance
     */
    ModifyMyInfoRequest.prototype.entry = $util.emptyArray;

    /**
     * Creates a new ModifyMyInfoRequest instance using the specified properties.
     * @function create
     * @memberof ModifyMyInfoRequest
     * @static
     * @param {IModifyMyInfoRequest=} [properties] Properties to set
     * @returns {ModifyMyInfoRequest} ModifyMyInfoRequest instance
     */
    ModifyMyInfoRequest.create = function create(properties) {
        return new ModifyMyInfoRequest(properties);
    };

    /**
     * Encodes the specified ModifyMyInfoRequest message. Does not implicitly {@link ModifyMyInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof ModifyMyInfoRequest
     * @static
     * @param {IModifyMyInfoRequest} message ModifyMyInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyMyInfoRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entry != null && message.entry.length)
            for (var i = 0; i < message.entry.length; ++i)
                $root.InfoEntry.encode(message.entry[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ModifyMyInfoRequest message, length delimited. Does not implicitly {@link ModifyMyInfoRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModifyMyInfoRequest
     * @static
     * @param {IModifyMyInfoRequest} message ModifyMyInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyMyInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModifyMyInfoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ModifyMyInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModifyMyInfoRequest} ModifyMyInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyMyInfoRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModifyMyInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entry && message.entry.length))
                    message.entry = [];
                message.entry.push($root.InfoEntry.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ModifyMyInfoRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModifyMyInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModifyMyInfoRequest} ModifyMyInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyMyInfoRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModifyMyInfoRequest message.
     * @function verify
     * @memberof ModifyMyInfoRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModifyMyInfoRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entry != null && message.hasOwnProperty("entry")) {
            if (!Array.isArray(message.entry))
                return "entry: array expected";
            for (var i = 0; i < message.entry.length; ++i) {
                var error = $root.InfoEntry.verify(message.entry[i]);
                if (error)
                    return "entry." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ModifyMyInfoRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModifyMyInfoRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifyMyInfoRequest} ModifyMyInfoRequest
     */
    ModifyMyInfoRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ModifyMyInfoRequest)
            return object;
        var message = new $root.ModifyMyInfoRequest();
        if (object.entry) {
            if (!Array.isArray(object.entry))
                throw TypeError(".ModifyMyInfoRequest.entry: array expected");
            message.entry = [];
            for (var i = 0; i < object.entry.length; ++i) {
                if (typeof object.entry[i] !== "object")
                    throw TypeError(".ModifyMyInfoRequest.entry: object expected");
                message.entry[i] = $root.InfoEntry.fromObject(object.entry[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ModifyMyInfoRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModifyMyInfoRequest
     * @static
     * @param {ModifyMyInfoRequest} message ModifyMyInfoRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModifyMyInfoRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entry = [];
        if (message.entry && message.entry.length) {
            object.entry = [];
            for (var j = 0; j < message.entry.length; ++j)
                object.entry[j] = $root.InfoEntry.toObject(message.entry[j], options);
        }
        return object;
    };

    /**
     * Converts this ModifyMyInfoRequest to JSON.
     * @function toJSON
     * @memberof ModifyMyInfoRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModifyMyInfoRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModifyMyInfoRequest;
})();

/**
 * PullType enum.
 * @exports PullType
 * @enum {string}
 * @property {number} Pull_Normal=0 Pull_Normal value
 * @property {number} Pull_ChatRoom=1 Pull_ChatRoom value
 * @property {number} Pull_Group=2 Pull_Group value
 */
$root.PullType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Pull_Normal"] = 0;
    values[valuesById[1] = "Pull_ChatRoom"] = 1;
    values[valuesById[2] = "Pull_Group"] = 2;
    return values;
})();

$root.NotifyMessage = (function() {

    /**
     * Properties of a NotifyMessage.
     * @exports INotifyMessage
     * @interface INotifyMessage
     * @property {PullType} type NotifyMessage type
     * @property {number|Long} head NotifyMessage head
     * @property {string|null} [target] NotifyMessage target
     */

    /**
     * Constructs a new NotifyMessage.
     * @exports NotifyMessage
     * @classdesc Represents a NotifyMessage.
     * @implements INotifyMessage
     * @constructor
     * @param {INotifyMessage=} [properties] Properties to set
     */
    function NotifyMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NotifyMessage type.
     * @member {PullType} type
     * @memberof NotifyMessage
     * @instance
     */
    NotifyMessage.prototype.type = 0;

    /**
     * NotifyMessage head.
     * @member {number|Long} head
     * @memberof NotifyMessage
     * @instance
     */
    NotifyMessage.prototype.head = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * NotifyMessage target.
     * @member {string} target
     * @memberof NotifyMessage
     * @instance
     */
    NotifyMessage.prototype.target = "";

    /**
     * Creates a new NotifyMessage instance using the specified properties.
     * @function create
     * @memberof NotifyMessage
     * @static
     * @param {INotifyMessage=} [properties] Properties to set
     * @returns {NotifyMessage} NotifyMessage instance
     */
    NotifyMessage.create = function create(properties) {
        return new NotifyMessage(properties);
    };

    /**
     * Encodes the specified NotifyMessage message. Does not implicitly {@link NotifyMessage.verify|verify} messages.
     * @function encode
     * @memberof NotifyMessage
     * @static
     * @param {INotifyMessage} message NotifyMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotifyMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.head);
        if (message.target != null && message.hasOwnProperty("target"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.target);
        return writer;
    };

    /**
     * Encodes the specified NotifyMessage message, length delimited. Does not implicitly {@link NotifyMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NotifyMessage
     * @static
     * @param {INotifyMessage} message NotifyMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotifyMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NotifyMessage message from the specified reader or buffer.
     * @function decode
     * @memberof NotifyMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NotifyMessage} NotifyMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotifyMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.head = reader.int64();
                break;
            case 3:
                message.target = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        if (!message.hasOwnProperty("head"))
            throw $util.ProtocolError("missing required 'head'", { instance: message });
        return message;
    };

    /**
     * Decodes a NotifyMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NotifyMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NotifyMessage} NotifyMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotifyMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NotifyMessage message.
     * @function verify
     * @memberof NotifyMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NotifyMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 0:
        case 1:
        case 2:
            break;
        }
        if (!$util.isInteger(message.head) && !(message.head && $util.isInteger(message.head.low) && $util.isInteger(message.head.high)))
            return "head: integer|Long expected";
        if (message.target != null && message.hasOwnProperty("target"))
            if (!$util.isString(message.target))
                return "target: string expected";
        return null;
    };

    /**
     * Creates a NotifyMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NotifyMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NotifyMessage} NotifyMessage
     */
    NotifyMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.NotifyMessage)
            return object;
        var message = new $root.NotifyMessage();
        switch (object.type) {
        case "Pull_Normal":
        case 0:
            message.type = 0;
            break;
        case "Pull_ChatRoom":
        case 1:
            message.type = 1;
            break;
        case "Pull_Group":
        case 2:
            message.type = 2;
            break;
        }
        if (object.head != null)
            if ($util.Long)
                (message.head = $util.Long.fromValue(object.head)).unsigned = false;
            else if (typeof object.head === "string")
                message.head = parseInt(object.head, 10);
            else if (typeof object.head === "number")
                message.head = object.head;
            else if (typeof object.head === "object")
                message.head = new $util.LongBits(object.head.low >>> 0, object.head.high >>> 0).toNumber();
        if (object.target != null)
            message.target = String(object.target);
        return message;
    };

    /**
     * Creates a plain object from a NotifyMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NotifyMessage
     * @static
     * @param {NotifyMessage} message NotifyMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NotifyMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "Pull_Normal" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.head = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.head = options.longs === String ? "0" : 0;
            object.target = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.PullType[message.type] : message.type;
        if (message.head != null && message.hasOwnProperty("head"))
            if (typeof message.head === "number")
                object.head = options.longs === String ? String(message.head) : message.head;
            else
                object.head = options.longs === String ? $util.Long.prototype.toString.call(message.head) : options.longs === Number ? new $util.LongBits(message.head.low >>> 0, message.head.high >>> 0).toNumber() : message.head;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = message.target;
        return object;
    };

    /**
     * Converts this NotifyMessage to JSON.
     * @function toJSON
     * @memberof NotifyMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NotifyMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NotifyMessage;
})();

$root.PullMessageRequest = (function() {

    /**
     * Properties of a PullMessageRequest.
     * @exports IPullMessageRequest
     * @interface IPullMessageRequest
     * @property {number|Long} id PullMessageRequest id
     * @property {PullType} type PullMessageRequest type
     */

    /**
     * Constructs a new PullMessageRequest.
     * @exports PullMessageRequest
     * @classdesc Represents a PullMessageRequest.
     * @implements IPullMessageRequest
     * @constructor
     * @param {IPullMessageRequest=} [properties] Properties to set
     */
    function PullMessageRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PullMessageRequest id.
     * @member {number|Long} id
     * @memberof PullMessageRequest
     * @instance
     */
    PullMessageRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PullMessageRequest type.
     * @member {PullType} type
     * @memberof PullMessageRequest
     * @instance
     */
    PullMessageRequest.prototype.type = 0;

    /**
     * Creates a new PullMessageRequest instance using the specified properties.
     * @function create
     * @memberof PullMessageRequest
     * @static
     * @param {IPullMessageRequest=} [properties] Properties to set
     * @returns {PullMessageRequest} PullMessageRequest instance
     */
    PullMessageRequest.create = function create(properties) {
        return new PullMessageRequest(properties);
    };

    /**
     * Encodes the specified PullMessageRequest message. Does not implicitly {@link PullMessageRequest.verify|verify} messages.
     * @function encode
     * @memberof PullMessageRequest
     * @static
     * @param {IPullMessageRequest} message PullMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullMessageRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified PullMessageRequest message, length delimited. Does not implicitly {@link PullMessageRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PullMessageRequest
     * @static
     * @param {IPullMessageRequest} message PullMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PullMessageRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PullMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PullMessageRequest} PullMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullMessageRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PullMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a PullMessageRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PullMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PullMessageRequest} PullMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullMessageRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PullMessageRequest message.
     * @function verify
     * @memberof PullMessageRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PullMessageRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
            return "id: integer|Long expected";
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 0:
        case 1:
        case 2:
            break;
        }
        return null;
    };

    /**
     * Creates a PullMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PullMessageRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PullMessageRequest} PullMessageRequest
     */
    PullMessageRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PullMessageRequest)
            return object;
        var message = new $root.PullMessageRequest();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        switch (object.type) {
        case "Pull_Normal":
        case 0:
            message.type = 0;
            break;
        case "Pull_ChatRoom":
        case 1:
            message.type = 1;
            break;
        case "Pull_Group":
        case 2:
            message.type = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a PullMessageRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PullMessageRequest
     * @static
     * @param {PullMessageRequest} message PullMessageRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PullMessageRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.type = options.enums === String ? "Pull_Normal" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.PullType[message.type] : message.type;
        return object;
    };

    /**
     * Converts this PullMessageRequest to JSON.
     * @function toJSON
     * @memberof PullMessageRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PullMessageRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PullMessageRequest;
})();

$root.PullMessageResult = (function() {

    /**
     * Properties of a PullMessageResult.
     * @exports IPullMessageResult
     * @interface IPullMessageResult
     * @property {Array.<IMessage>|null} [message] PullMessageResult message
     * @property {number|Long} current PullMessageResult current
     * @property {number|Long} head PullMessageResult head
     */

    /**
     * Constructs a new PullMessageResult.
     * @exports PullMessageResult
     * @classdesc Represents a PullMessageResult.
     * @implements IPullMessageResult
     * @constructor
     * @param {IPullMessageResult=} [properties] Properties to set
     */
    function PullMessageResult(properties) {
        this.message = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PullMessageResult message.
     * @member {Array.<IMessage>} message
     * @memberof PullMessageResult
     * @instance
     */
    PullMessageResult.prototype.message = $util.emptyArray;

    /**
     * PullMessageResult current.
     * @member {number|Long} current
     * @memberof PullMessageResult
     * @instance
     */
    PullMessageResult.prototype.current = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PullMessageResult head.
     * @member {number|Long} head
     * @memberof PullMessageResult
     * @instance
     */
    PullMessageResult.prototype.head = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new PullMessageResult instance using the specified properties.
     * @function create
     * @memberof PullMessageResult
     * @static
     * @param {IPullMessageResult=} [properties] Properties to set
     * @returns {PullMessageResult} PullMessageResult instance
     */
    PullMessageResult.create = function create(properties) {
        return new PullMessageResult(properties);
    };

    /**
     * Encodes the specified PullMessageResult message. Does not implicitly {@link PullMessageResult.verify|verify} messages.
     * @function encode
     * @memberof PullMessageResult
     * @static
     * @param {IPullMessageResult} message PullMessageResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullMessageResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && message.message.length)
            for (var i = 0; i < message.message.length; ++i)
                $root.Message.encode(message.message[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.current);
        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.head);
        return writer;
    };

    /**
     * Encodes the specified PullMessageResult message, length delimited. Does not implicitly {@link PullMessageResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PullMessageResult
     * @static
     * @param {IPullMessageResult} message PullMessageResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullMessageResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PullMessageResult message from the specified reader or buffer.
     * @function decode
     * @memberof PullMessageResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PullMessageResult} PullMessageResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullMessageResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PullMessageResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.message && message.message.length))
                    message.message = [];
                message.message.push($root.Message.decode(reader, reader.uint32()));
                break;
            case 2:
                message.current = reader.int64();
                break;
            case 3:
                message.head = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("current"))
            throw $util.ProtocolError("missing required 'current'", { instance: message });
        if (!message.hasOwnProperty("head"))
            throw $util.ProtocolError("missing required 'head'", { instance: message });
        return message;
    };

    /**
     * Decodes a PullMessageResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PullMessageResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PullMessageResult} PullMessageResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullMessageResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PullMessageResult message.
     * @function verify
     * @memberof PullMessageResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PullMessageResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message")) {
            if (!Array.isArray(message.message))
                return "message: array expected";
            for (var i = 0; i < message.message.length; ++i) {
                var error = $root.Message.verify(message.message[i]);
                if (error)
                    return "message." + error;
            }
        }
        if (!$util.isInteger(message.current) && !(message.current && $util.isInteger(message.current.low) && $util.isInteger(message.current.high)))
            return "current: integer|Long expected";
        if (!$util.isInteger(message.head) && !(message.head && $util.isInteger(message.head.low) && $util.isInteger(message.head.high)))
            return "head: integer|Long expected";
        return null;
    };

    /**
     * Creates a PullMessageResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PullMessageResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PullMessageResult} PullMessageResult
     */
    PullMessageResult.fromObject = function fromObject(object) {
        if (object instanceof $root.PullMessageResult)
            return object;
        var message = new $root.PullMessageResult();
        if (object.message) {
            if (!Array.isArray(object.message))
                throw TypeError(".PullMessageResult.message: array expected");
            message.message = [];
            for (var i = 0; i < object.message.length; ++i) {
                if (typeof object.message[i] !== "object")
                    throw TypeError(".PullMessageResult.message: object expected");
                message.message[i] = $root.Message.fromObject(object.message[i]);
            }
        }
        if (object.current != null)
            if ($util.Long)
                (message.current = $util.Long.fromValue(object.current)).unsigned = false;
            else if (typeof object.current === "string")
                message.current = parseInt(object.current, 10);
            else if (typeof object.current === "number")
                message.current = object.current;
            else if (typeof object.current === "object")
                message.current = new $util.LongBits(object.current.low >>> 0, object.current.high >>> 0).toNumber();
        if (object.head != null)
            if ($util.Long)
                (message.head = $util.Long.fromValue(object.head)).unsigned = false;
            else if (typeof object.head === "string")
                message.head = parseInt(object.head, 10);
            else if (typeof object.head === "number")
                message.head = object.head;
            else if (typeof object.head === "object")
                message.head = new $util.LongBits(object.head.low >>> 0, object.head.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a PullMessageResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PullMessageResult
     * @static
     * @param {PullMessageResult} message PullMessageResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PullMessageResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.message = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.current = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.current = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.head = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.head = options.longs === String ? "0" : 0;
        }
        if (message.message && message.message.length) {
            object.message = [];
            for (var j = 0; j < message.message.length; ++j)
                object.message[j] = $root.Message.toObject(message.message[j], options);
        }
        if (message.current != null && message.hasOwnProperty("current"))
            if (typeof message.current === "number")
                object.current = options.longs === String ? String(message.current) : message.current;
            else
                object.current = options.longs === String ? $util.Long.prototype.toString.call(message.current) : options.longs === Number ? new $util.LongBits(message.current.low >>> 0, message.current.high >>> 0).toNumber() : message.current;
        if (message.head != null && message.hasOwnProperty("head"))
            if (typeof message.head === "number")
                object.head = options.longs === String ? String(message.head) : message.head;
            else
                object.head = options.longs === String ? $util.Long.prototype.toString.call(message.head) : options.longs === Number ? new $util.LongBits(message.head.low >>> 0, message.head.high >>> 0).toNumber() : message.head;
        return object;
    };

    /**
     * Converts this PullMessageResult to JSON.
     * @function toJSON
     * @memberof PullMessageResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PullMessageResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PullMessageResult;
})();

$root.PullGroupInfoResult = (function() {

    /**
     * Properties of a PullGroupInfoResult.
     * @exports IPullGroupInfoResult
     * @interface IPullGroupInfoResult
     * @property {Array.<IGroupInfo>|null} [info] PullGroupInfoResult info
     */

    /**
     * Constructs a new PullGroupInfoResult.
     * @exports PullGroupInfoResult
     * @classdesc Represents a PullGroupInfoResult.
     * @implements IPullGroupInfoResult
     * @constructor
     * @param {IPullGroupInfoResult=} [properties] Properties to set
     */
    function PullGroupInfoResult(properties) {
        this.info = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PullGroupInfoResult info.
     * @member {Array.<IGroupInfo>} info
     * @memberof PullGroupInfoResult
     * @instance
     */
    PullGroupInfoResult.prototype.info = $util.emptyArray;

    /**
     * Creates a new PullGroupInfoResult instance using the specified properties.
     * @function create
     * @memberof PullGroupInfoResult
     * @static
     * @param {IPullGroupInfoResult=} [properties] Properties to set
     * @returns {PullGroupInfoResult} PullGroupInfoResult instance
     */
    PullGroupInfoResult.create = function create(properties) {
        return new PullGroupInfoResult(properties);
    };

    /**
     * Encodes the specified PullGroupInfoResult message. Does not implicitly {@link PullGroupInfoResult.verify|verify} messages.
     * @function encode
     * @memberof PullGroupInfoResult
     * @static
     * @param {IPullGroupInfoResult} message PullGroupInfoResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullGroupInfoResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.info != null && message.info.length)
            for (var i = 0; i < message.info.length; ++i)
                $root.GroupInfo.encode(message.info[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PullGroupInfoResult message, length delimited. Does not implicitly {@link PullGroupInfoResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PullGroupInfoResult
     * @static
     * @param {IPullGroupInfoResult} message PullGroupInfoResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullGroupInfoResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PullGroupInfoResult message from the specified reader or buffer.
     * @function decode
     * @memberof PullGroupInfoResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PullGroupInfoResult} PullGroupInfoResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullGroupInfoResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PullGroupInfoResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.info && message.info.length))
                    message.info = [];
                message.info.push($root.GroupInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PullGroupInfoResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PullGroupInfoResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PullGroupInfoResult} PullGroupInfoResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullGroupInfoResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PullGroupInfoResult message.
     * @function verify
     * @memberof PullGroupInfoResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PullGroupInfoResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.info != null && message.hasOwnProperty("info")) {
            if (!Array.isArray(message.info))
                return "info: array expected";
            for (var i = 0; i < message.info.length; ++i) {
                var error = $root.GroupInfo.verify(message.info[i]);
                if (error)
                    return "info." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PullGroupInfoResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PullGroupInfoResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PullGroupInfoResult} PullGroupInfoResult
     */
    PullGroupInfoResult.fromObject = function fromObject(object) {
        if (object instanceof $root.PullGroupInfoResult)
            return object;
        var message = new $root.PullGroupInfoResult();
        if (object.info) {
            if (!Array.isArray(object.info))
                throw TypeError(".PullGroupInfoResult.info: array expected");
            message.info = [];
            for (var i = 0; i < object.info.length; ++i) {
                if (typeof object.info[i] !== "object")
                    throw TypeError(".PullGroupInfoResult.info: object expected");
                message.info[i] = $root.GroupInfo.fromObject(object.info[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PullGroupInfoResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PullGroupInfoResult
     * @static
     * @param {PullGroupInfoResult} message PullGroupInfoResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PullGroupInfoResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.info = [];
        if (message.info && message.info.length) {
            object.info = [];
            for (var j = 0; j < message.info.length; ++j)
                object.info[j] = $root.GroupInfo.toObject(message.info[j], options);
        }
        return object;
    };

    /**
     * Converts this PullGroupInfoResult to JSON.
     * @function toJSON
     * @memberof PullGroupInfoResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PullGroupInfoResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PullGroupInfoResult;
})();

$root.PullGroupMemberRequest = (function() {

    /**
     * Properties of a PullGroupMemberRequest.
     * @exports IPullGroupMemberRequest
     * @interface IPullGroupMemberRequest
     * @property {string} target PullGroupMemberRequest target
     * @property {number|Long} head PullGroupMemberRequest head
     */

    /**
     * Constructs a new PullGroupMemberRequest.
     * @exports PullGroupMemberRequest
     * @classdesc Represents a PullGroupMemberRequest.
     * @implements IPullGroupMemberRequest
     * @constructor
     * @param {IPullGroupMemberRequest=} [properties] Properties to set
     */
    function PullGroupMemberRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PullGroupMemberRequest target.
     * @member {string} target
     * @memberof PullGroupMemberRequest
     * @instance
     */
    PullGroupMemberRequest.prototype.target = "";

    /**
     * PullGroupMemberRequest head.
     * @member {number|Long} head
     * @memberof PullGroupMemberRequest
     * @instance
     */
    PullGroupMemberRequest.prototype.head = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new PullGroupMemberRequest instance using the specified properties.
     * @function create
     * @memberof PullGroupMemberRequest
     * @static
     * @param {IPullGroupMemberRequest=} [properties] Properties to set
     * @returns {PullGroupMemberRequest} PullGroupMemberRequest instance
     */
    PullGroupMemberRequest.create = function create(properties) {
        return new PullGroupMemberRequest(properties);
    };

    /**
     * Encodes the specified PullGroupMemberRequest message. Does not implicitly {@link PullGroupMemberRequest.verify|verify} messages.
     * @function encode
     * @memberof PullGroupMemberRequest
     * @static
     * @param {IPullGroupMemberRequest} message PullGroupMemberRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullGroupMemberRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.target);
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.head);
        return writer;
    };

    /**
     * Encodes the specified PullGroupMemberRequest message, length delimited. Does not implicitly {@link PullGroupMemberRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PullGroupMemberRequest
     * @static
     * @param {IPullGroupMemberRequest} message PullGroupMemberRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullGroupMemberRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PullGroupMemberRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PullGroupMemberRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PullGroupMemberRequest} PullGroupMemberRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullGroupMemberRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PullGroupMemberRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.target = reader.string();
                break;
            case 2:
                message.head = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("target"))
            throw $util.ProtocolError("missing required 'target'", { instance: message });
        if (!message.hasOwnProperty("head"))
            throw $util.ProtocolError("missing required 'head'", { instance: message });
        return message;
    };

    /**
     * Decodes a PullGroupMemberRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PullGroupMemberRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PullGroupMemberRequest} PullGroupMemberRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullGroupMemberRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PullGroupMemberRequest message.
     * @function verify
     * @memberof PullGroupMemberRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PullGroupMemberRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.target))
            return "target: string expected";
        if (!$util.isInteger(message.head) && !(message.head && $util.isInteger(message.head.low) && $util.isInteger(message.head.high)))
            return "head: integer|Long expected";
        return null;
    };

    /**
     * Creates a PullGroupMemberRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PullGroupMemberRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PullGroupMemberRequest} PullGroupMemberRequest
     */
    PullGroupMemberRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PullGroupMemberRequest)
            return object;
        var message = new $root.PullGroupMemberRequest();
        if (object.target != null)
            message.target = String(object.target);
        if (object.head != null)
            if ($util.Long)
                (message.head = $util.Long.fromValue(object.head)).unsigned = false;
            else if (typeof object.head === "string")
                message.head = parseInt(object.head, 10);
            else if (typeof object.head === "number")
                message.head = object.head;
            else if (typeof object.head === "object")
                message.head = new $util.LongBits(object.head.low >>> 0, object.head.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a PullGroupMemberRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PullGroupMemberRequest
     * @static
     * @param {PullGroupMemberRequest} message PullGroupMemberRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PullGroupMemberRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.target = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.head = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.head = options.longs === String ? "0" : 0;
        }
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = message.target;
        if (message.head != null && message.hasOwnProperty("head"))
            if (typeof message.head === "number")
                object.head = options.longs === String ? String(message.head) : message.head;
            else
                object.head = options.longs === String ? $util.Long.prototype.toString.call(message.head) : options.longs === Number ? new $util.LongBits(message.head.low >>> 0, message.head.high >>> 0).toNumber() : message.head;
        return object;
    };

    /**
     * Converts this PullGroupMemberRequest to JSON.
     * @function toJSON
     * @memberof PullGroupMemberRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PullGroupMemberRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PullGroupMemberRequest;
})();

$root.PullGroupMemberResult = (function() {

    /**
     * Properties of a PullGroupMemberResult.
     * @exports IPullGroupMemberResult
     * @interface IPullGroupMemberResult
     * @property {Array.<IGroupMember>|null} [member] PullGroupMemberResult member
     */

    /**
     * Constructs a new PullGroupMemberResult.
     * @exports PullGroupMemberResult
     * @classdesc Represents a PullGroupMemberResult.
     * @implements IPullGroupMemberResult
     * @constructor
     * @param {IPullGroupMemberResult=} [properties] Properties to set
     */
    function PullGroupMemberResult(properties) {
        this.member = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PullGroupMemberResult member.
     * @member {Array.<IGroupMember>} member
     * @memberof PullGroupMemberResult
     * @instance
     */
    PullGroupMemberResult.prototype.member = $util.emptyArray;

    /**
     * Creates a new PullGroupMemberResult instance using the specified properties.
     * @function create
     * @memberof PullGroupMemberResult
     * @static
     * @param {IPullGroupMemberResult=} [properties] Properties to set
     * @returns {PullGroupMemberResult} PullGroupMemberResult instance
     */
    PullGroupMemberResult.create = function create(properties) {
        return new PullGroupMemberResult(properties);
    };

    /**
     * Encodes the specified PullGroupMemberResult message. Does not implicitly {@link PullGroupMemberResult.verify|verify} messages.
     * @function encode
     * @memberof PullGroupMemberResult
     * @static
     * @param {IPullGroupMemberResult} message PullGroupMemberResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullGroupMemberResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.member != null && message.member.length)
            for (var i = 0; i < message.member.length; ++i)
                $root.GroupMember.encode(message.member[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PullGroupMemberResult message, length delimited. Does not implicitly {@link PullGroupMemberResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PullGroupMemberResult
     * @static
     * @param {IPullGroupMemberResult} message PullGroupMemberResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullGroupMemberResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PullGroupMemberResult message from the specified reader or buffer.
     * @function decode
     * @memberof PullGroupMemberResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PullGroupMemberResult} PullGroupMemberResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullGroupMemberResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PullGroupMemberResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.member && message.member.length))
                    message.member = [];
                message.member.push($root.GroupMember.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PullGroupMemberResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PullGroupMemberResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PullGroupMemberResult} PullGroupMemberResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullGroupMemberResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PullGroupMemberResult message.
     * @function verify
     * @memberof PullGroupMemberResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PullGroupMemberResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.member != null && message.hasOwnProperty("member")) {
            if (!Array.isArray(message.member))
                return "member: array expected";
            for (var i = 0; i < message.member.length; ++i) {
                var error = $root.GroupMember.verify(message.member[i]);
                if (error)
                    return "member." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PullGroupMemberResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PullGroupMemberResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PullGroupMemberResult} PullGroupMemberResult
     */
    PullGroupMemberResult.fromObject = function fromObject(object) {
        if (object instanceof $root.PullGroupMemberResult)
            return object;
        var message = new $root.PullGroupMemberResult();
        if (object.member) {
            if (!Array.isArray(object.member))
                throw TypeError(".PullGroupMemberResult.member: array expected");
            message.member = [];
            for (var i = 0; i < object.member.length; ++i) {
                if (typeof object.member[i] !== "object")
                    throw TypeError(".PullGroupMemberResult.member: object expected");
                message.member[i] = $root.GroupMember.fromObject(object.member[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PullGroupMemberResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PullGroupMemberResult
     * @static
     * @param {PullGroupMemberResult} message PullGroupMemberResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PullGroupMemberResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.member = [];
        if (message.member && message.member.length) {
            object.member = [];
            for (var j = 0; j < message.member.length; ++j)
                object.member[j] = $root.GroupMember.toObject(message.member[j], options);
        }
        return object;
    };

    /**
     * Converts this PullGroupMemberResult to JSON.
     * @function toJSON
     * @memberof PullGroupMemberResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PullGroupMemberResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PullGroupMemberResult;
})();

$root.UserRequest = (function() {

    /**
     * Properties of a UserRequest.
     * @exports IUserRequest
     * @interface IUserRequest
     * @property {string} uid UserRequest uid
     * @property {number|Long|null} [updateDt] UserRequest updateDt
     */

    /**
     * Constructs a new UserRequest.
     * @exports UserRequest
     * @classdesc Represents a UserRequest.
     * @implements IUserRequest
     * @constructor
     * @param {IUserRequest=} [properties] Properties to set
     */
    function UserRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserRequest uid.
     * @member {string} uid
     * @memberof UserRequest
     * @instance
     */
    UserRequest.prototype.uid = "";

    /**
     * UserRequest updateDt.
     * @member {number|Long} updateDt
     * @memberof UserRequest
     * @instance
     */
    UserRequest.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new UserRequest instance using the specified properties.
     * @function create
     * @memberof UserRequest
     * @static
     * @param {IUserRequest=} [properties] Properties to set
     * @returns {UserRequest} UserRequest instance
     */
    UserRequest.create = function create(properties) {
        return new UserRequest(properties);
    };

    /**
     * Encodes the specified UserRequest message. Does not implicitly {@link UserRequest.verify|verify} messages.
     * @function encode
     * @memberof UserRequest
     * @static
     * @param {IUserRequest} message UserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.updateDt);
        return writer;
    };

    /**
     * Encodes the specified UserRequest message, length delimited. Does not implicitly {@link UserRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserRequest
     * @static
     * @param {IUserRequest} message UserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserRequest} UserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.string();
                break;
            case 2:
                message.updateDt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserRequest} UserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserRequest message.
     * @function verify
     * @memberof UserRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.uid))
            return "uid: string expected";
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
                return "updateDt: integer|Long expected";
        return null;
    };

    /**
     * Creates a UserRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserRequest} UserRequest
     */
    UserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UserRequest)
            return object;
        var message = new $root.UserRequest();
        if (object.uid != null)
            message.uid = String(object.uid);
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UserRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserRequest
     * @static
     * @param {UserRequest} message UserRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uid = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        return object;
    };

    /**
     * Converts this UserRequest to JSON.
     * @function toJSON
     * @memberof UserRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserRequest;
})();

$root.PullUserRequest = (function() {

    /**
     * Properties of a PullUserRequest.
     * @exports IPullUserRequest
     * @interface IPullUserRequest
     * @property {Array.<IUserRequest>|null} [request] PullUserRequest request
     */

    /**
     * Constructs a new PullUserRequest.
     * @exports PullUserRequest
     * @classdesc Represents a PullUserRequest.
     * @implements IPullUserRequest
     * @constructor
     * @param {IPullUserRequest=} [properties] Properties to set
     */
    function PullUserRequest(properties) {
        this.request = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PullUserRequest request.
     * @member {Array.<IUserRequest>} request
     * @memberof PullUserRequest
     * @instance
     */
    PullUserRequest.prototype.request = $util.emptyArray;

    /**
     * Creates a new PullUserRequest instance using the specified properties.
     * @function create
     * @memberof PullUserRequest
     * @static
     * @param {IPullUserRequest=} [properties] Properties to set
     * @returns {PullUserRequest} PullUserRequest instance
     */
    PullUserRequest.create = function create(properties) {
        return new PullUserRequest(properties);
    };

    /**
     * Encodes the specified PullUserRequest message. Does not implicitly {@link PullUserRequest.verify|verify} messages.
     * @function encode
     * @memberof PullUserRequest
     * @static
     * @param {IPullUserRequest} message PullUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullUserRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.request != null && message.request.length)
            for (var i = 0; i < message.request.length; ++i)
                $root.UserRequest.encode(message.request[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PullUserRequest message, length delimited. Does not implicitly {@link PullUserRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PullUserRequest
     * @static
     * @param {IPullUserRequest} message PullUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PullUserRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PullUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PullUserRequest} PullUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullUserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PullUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.request && message.request.length))
                    message.request = [];
                message.request.push($root.UserRequest.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PullUserRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PullUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PullUserRequest} PullUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullUserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PullUserRequest message.
     * @function verify
     * @memberof PullUserRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PullUserRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.request != null && message.hasOwnProperty("request")) {
            if (!Array.isArray(message.request))
                return "request: array expected";
            for (var i = 0; i < message.request.length; ++i) {
                var error = $root.UserRequest.verify(message.request[i]);
                if (error)
                    return "request." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PullUserRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PullUserRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PullUserRequest} PullUserRequest
     */
    PullUserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PullUserRequest)
            return object;
        var message = new $root.PullUserRequest();
        if (object.request) {
            if (!Array.isArray(object.request))
                throw TypeError(".PullUserRequest.request: array expected");
            message.request = [];
            for (var i = 0; i < object.request.length; ++i) {
                if (typeof object.request[i] !== "object")
                    throw TypeError(".PullUserRequest.request: object expected");
                message.request[i] = $root.UserRequest.fromObject(object.request[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PullUserRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PullUserRequest
     * @static
     * @param {PullUserRequest} message PullUserRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PullUserRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.request = [];
        if (message.request && message.request.length) {
            object.request = [];
            for (var j = 0; j < message.request.length; ++j)
                object.request[j] = $root.UserRequest.toObject(message.request[j], options);
        }
        return object;
    };

    /**
     * Converts this PullUserRequest to JSON.
     * @function toJSON
     * @memberof PullUserRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PullUserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PullUserRequest;
})();

/**
 * UserResultCode enum.
 * @exports UserResultCode
 * @enum {string}
 * @property {number} Success=0 Success value
 * @property {number} NotFound=1 NotFound value
 * @property {number} NotModified=2 NotModified value
 */
$root.UserResultCode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Success"] = 0;
    values[valuesById[1] = "NotFound"] = 1;
    values[valuesById[2] = "NotModified"] = 2;
    return values;
})();

$root.UserResult = (function() {

    /**
     * Properties of a UserResult.
     * @exports IUserResult
     * @interface IUserResult
     * @property {IUser} user UserResult user
     * @property {UserResultCode} code UserResult code
     */

    /**
     * Constructs a new UserResult.
     * @exports UserResult
     * @classdesc Represents a UserResult.
     * @implements IUserResult
     * @constructor
     * @param {IUserResult=} [properties] Properties to set
     */
    function UserResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserResult user.
     * @member {IUser} user
     * @memberof UserResult
     * @instance
     */
    UserResult.prototype.user = null;

    /**
     * UserResult code.
     * @member {UserResultCode} code
     * @memberof UserResult
     * @instance
     */
    UserResult.prototype.code = 0;

    /**
     * Creates a new UserResult instance using the specified properties.
     * @function create
     * @memberof UserResult
     * @static
     * @param {IUserResult=} [properties] Properties to set
     * @returns {UserResult} UserResult instance
     */
    UserResult.create = function create(properties) {
        return new UserResult(properties);
    };

    /**
     * Encodes the specified UserResult message. Does not implicitly {@link UserResult.verify|verify} messages.
     * @function encode
     * @memberof UserResult
     * @static
     * @param {IUserResult} message UserResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified UserResult message, length delimited. Does not implicitly {@link UserResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserResult
     * @static
     * @param {IUserResult} message UserResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserResult message from the specified reader or buffer.
     * @function decode
     * @memberof UserResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserResult} UserResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.user = $root.User.decode(reader, reader.uint32());
                break;
            case 2:
                message.code = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("user"))
            throw $util.ProtocolError("missing required 'user'", { instance: message });
        if (!message.hasOwnProperty("code"))
            throw $util.ProtocolError("missing required 'code'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserResult} UserResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserResult message.
     * @function verify
     * @memberof UserResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.User.verify(message.user);
            if (error)
                return "user." + error;
        }
        switch (message.code) {
        default:
            return "code: enum value expected";
        case 0:
        case 1:
        case 2:
            break;
        }
        return null;
    };

    /**
     * Creates a UserResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserResult} UserResult
     */
    UserResult.fromObject = function fromObject(object) {
        if (object instanceof $root.UserResult)
            return object;
        var message = new $root.UserResult();
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".UserResult.user: object expected");
            message.user = $root.User.fromObject(object.user);
        }
        switch (object.code) {
        case "Success":
        case 0:
            message.code = 0;
            break;
        case "NotFound":
        case 1:
            message.code = 1;
            break;
        case "NotModified":
        case 2:
            message.code = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a UserResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserResult
     * @static
     * @param {UserResult} message UserResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.user = null;
            object.code = options.enums === String ? "Success" : 0;
        }
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.User.toObject(message.user, options);
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.UserResultCode[message.code] : message.code;
        return object;
    };

    /**
     * Converts this UserResult to JSON.
     * @function toJSON
     * @memberof UserResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserResult;
})();

$root.PullUserResult = (function() {

    /**
     * Properties of a PullUserResult.
     * @exports IPullUserResult
     * @interface IPullUserResult
     * @property {Array.<IUserResult>|null} [result] PullUserResult result
     */

    /**
     * Constructs a new PullUserResult.
     * @exports PullUserResult
     * @classdesc Represents a PullUserResult.
     * @implements IPullUserResult
     * @constructor
     * @param {IPullUserResult=} [properties] Properties to set
     */
    function PullUserResult(properties) {
        this.result = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PullUserResult result.
     * @member {Array.<IUserResult>} result
     * @memberof PullUserResult
     * @instance
     */
    PullUserResult.prototype.result = $util.emptyArray;

    /**
     * Creates a new PullUserResult instance using the specified properties.
     * @function create
     * @memberof PullUserResult
     * @static
     * @param {IPullUserResult=} [properties] Properties to set
     * @returns {PullUserResult} PullUserResult instance
     */
    PullUserResult.create = function create(properties) {
        return new PullUserResult(properties);
    };

    /**
     * Encodes the specified PullUserResult message. Does not implicitly {@link PullUserResult.verify|verify} messages.
     * @function encode
     * @memberof PullUserResult
     * @static
     * @param {IPullUserResult} message PullUserResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullUserResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && message.result.length)
            for (var i = 0; i < message.result.length; ++i)
                $root.UserResult.encode(message.result[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PullUserResult message, length delimited. Does not implicitly {@link PullUserResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PullUserResult
     * @static
     * @param {IPullUserResult} message PullUserResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PullUserResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PullUserResult message from the specified reader or buffer.
     * @function decode
     * @memberof PullUserResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PullUserResult} PullUserResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullUserResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PullUserResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.result && message.result.length))
                    message.result = [];
                message.result.push($root.UserResult.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PullUserResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PullUserResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PullUserResult} PullUserResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PullUserResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PullUserResult message.
     * @function verify
     * @memberof PullUserResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PullUserResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            if (!Array.isArray(message.result))
                return "result: array expected";
            for (var i = 0; i < message.result.length; ++i) {
                var error = $root.UserResult.verify(message.result[i]);
                if (error)
                    return "result." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PullUserResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PullUserResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PullUserResult} PullUserResult
     */
    PullUserResult.fromObject = function fromObject(object) {
        if (object instanceof $root.PullUserResult)
            return object;
        var message = new $root.PullUserResult();
        if (object.result) {
            if (!Array.isArray(object.result))
                throw TypeError(".PullUserResult.result: array expected");
            message.result = [];
            for (var i = 0; i < object.result.length; ++i) {
                if (typeof object.result[i] !== "object")
                    throw TypeError(".PullUserResult.result: object expected");
                message.result[i] = $root.UserResult.fromObject(object.result[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PullUserResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PullUserResult
     * @static
     * @param {PullUserResult} message PullUserResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PullUserResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.result = [];
        if (message.result && message.result.length) {
            object.result = [];
            for (var j = 0; j < message.result.length; ++j)
                object.result[j] = $root.UserResult.toObject(message.result[j], options);
        }
        return object;
    };

    /**
     * Converts this PullUserResult to JSON.
     * @function toJSON
     * @memberof PullUserResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PullUserResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PullUserResult;
})();

$root.QuitGroupRequest = (function() {

    /**
     * Properties of a QuitGroupRequest.
     * @exports IQuitGroupRequest
     * @interface IQuitGroupRequest
     * @property {string} groupId QuitGroupRequest groupId
     * @property {Array.<number>|null} [toLine] QuitGroupRequest toLine
     * @property {IMessageContent|null} [notifyContent] QuitGroupRequest notifyContent
     */

    /**
     * Constructs a new QuitGroupRequest.
     * @exports QuitGroupRequest
     * @classdesc Represents a QuitGroupRequest.
     * @implements IQuitGroupRequest
     * @constructor
     * @param {IQuitGroupRequest=} [properties] Properties to set
     */
    function QuitGroupRequest(properties) {
        this.toLine = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuitGroupRequest groupId.
     * @member {string} groupId
     * @memberof QuitGroupRequest
     * @instance
     */
    QuitGroupRequest.prototype.groupId = "";

    /**
     * QuitGroupRequest toLine.
     * @member {Array.<number>} toLine
     * @memberof QuitGroupRequest
     * @instance
     */
    QuitGroupRequest.prototype.toLine = $util.emptyArray;

    /**
     * QuitGroupRequest notifyContent.
     * @member {IMessageContent|null|undefined} notifyContent
     * @memberof QuitGroupRequest
     * @instance
     */
    QuitGroupRequest.prototype.notifyContent = null;

    /**
     * Creates a new QuitGroupRequest instance using the specified properties.
     * @function create
     * @memberof QuitGroupRequest
     * @static
     * @param {IQuitGroupRequest=} [properties] Properties to set
     * @returns {QuitGroupRequest} QuitGroupRequest instance
     */
    QuitGroupRequest.create = function create(properties) {
        return new QuitGroupRequest(properties);
    };

    /**
     * Encodes the specified QuitGroupRequest message. Does not implicitly {@link QuitGroupRequest.verify|verify} messages.
     * @function encode
     * @memberof QuitGroupRequest
     * @static
     * @param {IQuitGroupRequest} message QuitGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitGroupRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        if (message.toLine != null && message.toLine.length)
            for (var i = 0; i < message.toLine.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toLine[i]);
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            $root.MessageContent.encode(message.notifyContent, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified QuitGroupRequest message, length delimited. Does not implicitly {@link QuitGroupRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuitGroupRequest
     * @static
     * @param {IQuitGroupRequest} message QuitGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitGroupRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuitGroupRequest message from the specified reader or buffer.
     * @function decode
     * @memberof QuitGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuitGroupRequest} QuitGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitGroupRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuitGroupRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupId = reader.string();
                break;
            case 2:
                if (!(message.toLine && message.toLine.length))
                    message.toLine = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.toLine.push(reader.int32());
                } else
                    message.toLine.push(reader.int32());
                break;
            case 3:
                message.notifyContent = $root.MessageContent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("groupId"))
            throw $util.ProtocolError("missing required 'groupId'", { instance: message });
        return message;
    };

    /**
     * Decodes a QuitGroupRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QuitGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuitGroupRequest} QuitGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitGroupRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuitGroupRequest message.
     * @function verify
     * @memberof QuitGroupRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QuitGroupRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.groupId))
            return "groupId: string expected";
        if (message.toLine != null && message.hasOwnProperty("toLine")) {
            if (!Array.isArray(message.toLine))
                return "toLine: array expected";
            for (var i = 0; i < message.toLine.length; ++i)
                if (!$util.isInteger(message.toLine[i]))
                    return "toLine: integer[] expected";
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent")) {
            var error = $root.MessageContent.verify(message.notifyContent);
            if (error)
                return "notifyContent." + error;
        }
        return null;
    };

    /**
     * Creates a QuitGroupRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuitGroupRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuitGroupRequest} QuitGroupRequest
     */
    QuitGroupRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.QuitGroupRequest)
            return object;
        var message = new $root.QuitGroupRequest();
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        if (object.toLine) {
            if (!Array.isArray(object.toLine))
                throw TypeError(".QuitGroupRequest.toLine: array expected");
            message.toLine = [];
            for (var i = 0; i < object.toLine.length; ++i)
                message.toLine[i] = object.toLine[i] | 0;
        }
        if (object.notifyContent != null) {
            if (typeof object.notifyContent !== "object")
                throw TypeError(".QuitGroupRequest.notifyContent: object expected");
            message.notifyContent = $root.MessageContent.fromObject(object.notifyContent);
        }
        return message;
    };

    /**
     * Creates a plain object from a QuitGroupRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuitGroupRequest
     * @static
     * @param {QuitGroupRequest} message QuitGroupRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuitGroupRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.toLine = [];
        if (options.defaults) {
            object.groupId = "";
            object.notifyContent = null;
        }
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.toLine && message.toLine.length) {
            object.toLine = [];
            for (var j = 0; j < message.toLine.length; ++j)
                object.toLine[j] = message.toLine[j];
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            object.notifyContent = $root.MessageContent.toObject(message.notifyContent, options);
        return object;
    };

    /**
     * Converts this QuitGroupRequest to JSON.
     * @function toJSON
     * @memberof QuitGroupRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuitGroupRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuitGroupRequest;
})();

$root.RemoveGroupMemberRequest = (function() {

    /**
     * Properties of a RemoveGroupMemberRequest.
     * @exports IRemoveGroupMemberRequest
     * @interface IRemoveGroupMemberRequest
     * @property {string} groupId RemoveGroupMemberRequest groupId
     * @property {Array.<string>|null} [removedMember] RemoveGroupMemberRequest removedMember
     * @property {Array.<number>|null} [toLine] RemoveGroupMemberRequest toLine
     * @property {IMessageContent|null} [notifyContent] RemoveGroupMemberRequest notifyContent
     */

    /**
     * Constructs a new RemoveGroupMemberRequest.
     * @exports RemoveGroupMemberRequest
     * @classdesc Represents a RemoveGroupMemberRequest.
     * @implements IRemoveGroupMemberRequest
     * @constructor
     * @param {IRemoveGroupMemberRequest=} [properties] Properties to set
     */
    function RemoveGroupMemberRequest(properties) {
        this.removedMember = [];
        this.toLine = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RemoveGroupMemberRequest groupId.
     * @member {string} groupId
     * @memberof RemoveGroupMemberRequest
     * @instance
     */
    RemoveGroupMemberRequest.prototype.groupId = "";

    /**
     * RemoveGroupMemberRequest removedMember.
     * @member {Array.<string>} removedMember
     * @memberof RemoveGroupMemberRequest
     * @instance
     */
    RemoveGroupMemberRequest.prototype.removedMember = $util.emptyArray;

    /**
     * RemoveGroupMemberRequest toLine.
     * @member {Array.<number>} toLine
     * @memberof RemoveGroupMemberRequest
     * @instance
     */
    RemoveGroupMemberRequest.prototype.toLine = $util.emptyArray;

    /**
     * RemoveGroupMemberRequest notifyContent.
     * @member {IMessageContent|null|undefined} notifyContent
     * @memberof RemoveGroupMemberRequest
     * @instance
     */
    RemoveGroupMemberRequest.prototype.notifyContent = null;

    /**
     * Creates a new RemoveGroupMemberRequest instance using the specified properties.
     * @function create
     * @memberof RemoveGroupMemberRequest
     * @static
     * @param {IRemoveGroupMemberRequest=} [properties] Properties to set
     * @returns {RemoveGroupMemberRequest} RemoveGroupMemberRequest instance
     */
    RemoveGroupMemberRequest.create = function create(properties) {
        return new RemoveGroupMemberRequest(properties);
    };

    /**
     * Encodes the specified RemoveGroupMemberRequest message. Does not implicitly {@link RemoveGroupMemberRequest.verify|verify} messages.
     * @function encode
     * @memberof RemoveGroupMemberRequest
     * @static
     * @param {IRemoveGroupMemberRequest} message RemoveGroupMemberRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveGroupMemberRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        if (message.removedMember != null && message.removedMember.length)
            for (var i = 0; i < message.removedMember.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.removedMember[i]);
        if (message.toLine != null && message.toLine.length)
            for (var i = 0; i < message.toLine.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.toLine[i]);
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            $root.MessageContent.encode(message.notifyContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RemoveGroupMemberRequest message, length delimited. Does not implicitly {@link RemoveGroupMemberRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RemoveGroupMemberRequest
     * @static
     * @param {IRemoveGroupMemberRequest} message RemoveGroupMemberRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveGroupMemberRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RemoveGroupMemberRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RemoveGroupMemberRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoveGroupMemberRequest} RemoveGroupMemberRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveGroupMemberRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoveGroupMemberRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupId = reader.string();
                break;
            case 2:
                if (!(message.removedMember && message.removedMember.length))
                    message.removedMember = [];
                message.removedMember.push(reader.string());
                break;
            case 3:
                if (!(message.toLine && message.toLine.length))
                    message.toLine = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.toLine.push(reader.int32());
                } else
                    message.toLine.push(reader.int32());
                break;
            case 4:
                message.notifyContent = $root.MessageContent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("groupId"))
            throw $util.ProtocolError("missing required 'groupId'", { instance: message });
        return message;
    };

    /**
     * Decodes a RemoveGroupMemberRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RemoveGroupMemberRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoveGroupMemberRequest} RemoveGroupMemberRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveGroupMemberRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RemoveGroupMemberRequest message.
     * @function verify
     * @memberof RemoveGroupMemberRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RemoveGroupMemberRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.groupId))
            return "groupId: string expected";
        if (message.removedMember != null && message.hasOwnProperty("removedMember")) {
            if (!Array.isArray(message.removedMember))
                return "removedMember: array expected";
            for (var i = 0; i < message.removedMember.length; ++i)
                if (!$util.isString(message.removedMember[i]))
                    return "removedMember: string[] expected";
        }
        if (message.toLine != null && message.hasOwnProperty("toLine")) {
            if (!Array.isArray(message.toLine))
                return "toLine: array expected";
            for (var i = 0; i < message.toLine.length; ++i)
                if (!$util.isInteger(message.toLine[i]))
                    return "toLine: integer[] expected";
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent")) {
            var error = $root.MessageContent.verify(message.notifyContent);
            if (error)
                return "notifyContent." + error;
        }
        return null;
    };

    /**
     * Creates a RemoveGroupMemberRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RemoveGroupMemberRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveGroupMemberRequest} RemoveGroupMemberRequest
     */
    RemoveGroupMemberRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.RemoveGroupMemberRequest)
            return object;
        var message = new $root.RemoveGroupMemberRequest();
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        if (object.removedMember) {
            if (!Array.isArray(object.removedMember))
                throw TypeError(".RemoveGroupMemberRequest.removedMember: array expected");
            message.removedMember = [];
            for (var i = 0; i < object.removedMember.length; ++i)
                message.removedMember[i] = String(object.removedMember[i]);
        }
        if (object.toLine) {
            if (!Array.isArray(object.toLine))
                throw TypeError(".RemoveGroupMemberRequest.toLine: array expected");
            message.toLine = [];
            for (var i = 0; i < object.toLine.length; ++i)
                message.toLine[i] = object.toLine[i] | 0;
        }
        if (object.notifyContent != null) {
            if (typeof object.notifyContent !== "object")
                throw TypeError(".RemoveGroupMemberRequest.notifyContent: object expected");
            message.notifyContent = $root.MessageContent.fromObject(object.notifyContent);
        }
        return message;
    };

    /**
     * Creates a plain object from a RemoveGroupMemberRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RemoveGroupMemberRequest
     * @static
     * @param {RemoveGroupMemberRequest} message RemoveGroupMemberRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RemoveGroupMemberRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.removedMember = [];
            object.toLine = [];
        }
        if (options.defaults) {
            object.groupId = "";
            object.notifyContent = null;
        }
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.removedMember && message.removedMember.length) {
            object.removedMember = [];
            for (var j = 0; j < message.removedMember.length; ++j)
                object.removedMember[j] = message.removedMember[j];
        }
        if (message.toLine && message.toLine.length) {
            object.toLine = [];
            for (var j = 0; j < message.toLine.length; ++j)
                object.toLine[j] = message.toLine[j];
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            object.notifyContent = $root.MessageContent.toObject(message.notifyContent, options);
        return object;
    };

    /**
     * Converts this RemoveGroupMemberRequest to JSON.
     * @function toJSON
     * @memberof RemoveGroupMemberRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RemoveGroupMemberRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RemoveGroupMemberRequest;
})();

$root.TransferGroupRequest = (function() {

    /**
     * Properties of a TransferGroupRequest.
     * @exports ITransferGroupRequest
     * @interface ITransferGroupRequest
     * @property {string} groupId TransferGroupRequest groupId
     * @property {string} newOwner TransferGroupRequest newOwner
     * @property {Array.<number>|null} [toLine] TransferGroupRequest toLine
     * @property {IMessageContent|null} [notifyContent] TransferGroupRequest notifyContent
     */

    /**
     * Constructs a new TransferGroupRequest.
     * @exports TransferGroupRequest
     * @classdesc Represents a TransferGroupRequest.
     * @implements ITransferGroupRequest
     * @constructor
     * @param {ITransferGroupRequest=} [properties] Properties to set
     */
    function TransferGroupRequest(properties) {
        this.toLine = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransferGroupRequest groupId.
     * @member {string} groupId
     * @memberof TransferGroupRequest
     * @instance
     */
    TransferGroupRequest.prototype.groupId = "";

    /**
     * TransferGroupRequest newOwner.
     * @member {string} newOwner
     * @memberof TransferGroupRequest
     * @instance
     */
    TransferGroupRequest.prototype.newOwner = "";

    /**
     * TransferGroupRequest toLine.
     * @member {Array.<number>} toLine
     * @memberof TransferGroupRequest
     * @instance
     */
    TransferGroupRequest.prototype.toLine = $util.emptyArray;

    /**
     * TransferGroupRequest notifyContent.
     * @member {IMessageContent|null|undefined} notifyContent
     * @memberof TransferGroupRequest
     * @instance
     */
    TransferGroupRequest.prototype.notifyContent = null;

    /**
     * Creates a new TransferGroupRequest instance using the specified properties.
     * @function create
     * @memberof TransferGroupRequest
     * @static
     * @param {ITransferGroupRequest=} [properties] Properties to set
     * @returns {TransferGroupRequest} TransferGroupRequest instance
     */
    TransferGroupRequest.create = function create(properties) {
        return new TransferGroupRequest(properties);
    };

    /**
     * Encodes the specified TransferGroupRequest message. Does not implicitly {@link TransferGroupRequest.verify|verify} messages.
     * @function encode
     * @memberof TransferGroupRequest
     * @static
     * @param {ITransferGroupRequest} message TransferGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransferGroupRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.newOwner);
        if (message.toLine != null && message.toLine.length)
            for (var i = 0; i < message.toLine.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.toLine[i]);
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            $root.MessageContent.encode(message.notifyContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TransferGroupRequest message, length delimited. Does not implicitly {@link TransferGroupRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransferGroupRequest
     * @static
     * @param {ITransferGroupRequest} message TransferGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransferGroupRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransferGroupRequest message from the specified reader or buffer.
     * @function decode
     * @memberof TransferGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransferGroupRequest} TransferGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransferGroupRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransferGroupRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupId = reader.string();
                break;
            case 2:
                message.newOwner = reader.string();
                break;
            case 3:
                if (!(message.toLine && message.toLine.length))
                    message.toLine = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.toLine.push(reader.int32());
                } else
                    message.toLine.push(reader.int32());
                break;
            case 4:
                message.notifyContent = $root.MessageContent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("groupId"))
            throw $util.ProtocolError("missing required 'groupId'", { instance: message });
        if (!message.hasOwnProperty("newOwner"))
            throw $util.ProtocolError("missing required 'newOwner'", { instance: message });
        return message;
    };

    /**
     * Decodes a TransferGroupRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransferGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransferGroupRequest} TransferGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransferGroupRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransferGroupRequest message.
     * @function verify
     * @memberof TransferGroupRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransferGroupRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.groupId))
            return "groupId: string expected";
        if (!$util.isString(message.newOwner))
            return "newOwner: string expected";
        if (message.toLine != null && message.hasOwnProperty("toLine")) {
            if (!Array.isArray(message.toLine))
                return "toLine: array expected";
            for (var i = 0; i < message.toLine.length; ++i)
                if (!$util.isInteger(message.toLine[i]))
                    return "toLine: integer[] expected";
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent")) {
            var error = $root.MessageContent.verify(message.notifyContent);
            if (error)
                return "notifyContent." + error;
        }
        return null;
    };

    /**
     * Creates a TransferGroupRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransferGroupRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransferGroupRequest} TransferGroupRequest
     */
    TransferGroupRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.TransferGroupRequest)
            return object;
        var message = new $root.TransferGroupRequest();
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        if (object.newOwner != null)
            message.newOwner = String(object.newOwner);
        if (object.toLine) {
            if (!Array.isArray(object.toLine))
                throw TypeError(".TransferGroupRequest.toLine: array expected");
            message.toLine = [];
            for (var i = 0; i < object.toLine.length; ++i)
                message.toLine[i] = object.toLine[i] | 0;
        }
        if (object.notifyContent != null) {
            if (typeof object.notifyContent !== "object")
                throw TypeError(".TransferGroupRequest.notifyContent: object expected");
            message.notifyContent = $root.MessageContent.fromObject(object.notifyContent);
        }
        return message;
    };

    /**
     * Creates a plain object from a TransferGroupRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransferGroupRequest
     * @static
     * @param {TransferGroupRequest} message TransferGroupRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransferGroupRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.toLine = [];
        if (options.defaults) {
            object.groupId = "";
            object.newOwner = "";
            object.notifyContent = null;
        }
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.newOwner != null && message.hasOwnProperty("newOwner"))
            object.newOwner = message.newOwner;
        if (message.toLine && message.toLine.length) {
            object.toLine = [];
            for (var j = 0; j < message.toLine.length; ++j)
                object.toLine[j] = message.toLine[j];
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            object.notifyContent = $root.MessageContent.toObject(message.notifyContent, options);
        return object;
    };

    /**
     * Converts this TransferGroupRequest to JSON.
     * @function toJSON
     * @memberof TransferGroupRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransferGroupRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransferGroupRequest;
})();

$root.ModifyGroupMemberAlias = (function() {

    /**
     * Properties of a ModifyGroupMemberAlias.
     * @exports IModifyGroupMemberAlias
     * @interface IModifyGroupMemberAlias
     * @property {string} groupId ModifyGroupMemberAlias groupId
     * @property {string} alias ModifyGroupMemberAlias alias
     * @property {Array.<number>|null} [toLine] ModifyGroupMemberAlias toLine
     * @property {IMessageContent|null} [notifyContent] ModifyGroupMemberAlias notifyContent
     */

    /**
     * Constructs a new ModifyGroupMemberAlias.
     * @exports ModifyGroupMemberAlias
     * @classdesc Represents a ModifyGroupMemberAlias.
     * @implements IModifyGroupMemberAlias
     * @constructor
     * @param {IModifyGroupMemberAlias=} [properties] Properties to set
     */
    function ModifyGroupMemberAlias(properties) {
        this.toLine = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModifyGroupMemberAlias groupId.
     * @member {string} groupId
     * @memberof ModifyGroupMemberAlias
     * @instance
     */
    ModifyGroupMemberAlias.prototype.groupId = "";

    /**
     * ModifyGroupMemberAlias alias.
     * @member {string} alias
     * @memberof ModifyGroupMemberAlias
     * @instance
     */
    ModifyGroupMemberAlias.prototype.alias = "";

    /**
     * ModifyGroupMemberAlias toLine.
     * @member {Array.<number>} toLine
     * @memberof ModifyGroupMemberAlias
     * @instance
     */
    ModifyGroupMemberAlias.prototype.toLine = $util.emptyArray;

    /**
     * ModifyGroupMemberAlias notifyContent.
     * @member {IMessageContent|null|undefined} notifyContent
     * @memberof ModifyGroupMemberAlias
     * @instance
     */
    ModifyGroupMemberAlias.prototype.notifyContent = null;

    /**
     * Creates a new ModifyGroupMemberAlias instance using the specified properties.
     * @function create
     * @memberof ModifyGroupMemberAlias
     * @static
     * @param {IModifyGroupMemberAlias=} [properties] Properties to set
     * @returns {ModifyGroupMemberAlias} ModifyGroupMemberAlias instance
     */
    ModifyGroupMemberAlias.create = function create(properties) {
        return new ModifyGroupMemberAlias(properties);
    };

    /**
     * Encodes the specified ModifyGroupMemberAlias message. Does not implicitly {@link ModifyGroupMemberAlias.verify|verify} messages.
     * @function encode
     * @memberof ModifyGroupMemberAlias
     * @static
     * @param {IModifyGroupMemberAlias} message ModifyGroupMemberAlias message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyGroupMemberAlias.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias);
        if (message.toLine != null && message.toLine.length)
            for (var i = 0; i < message.toLine.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.toLine[i]);
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            $root.MessageContent.encode(message.notifyContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ModifyGroupMemberAlias message, length delimited. Does not implicitly {@link ModifyGroupMemberAlias.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModifyGroupMemberAlias
     * @static
     * @param {IModifyGroupMemberAlias} message ModifyGroupMemberAlias message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyGroupMemberAlias.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModifyGroupMemberAlias message from the specified reader or buffer.
     * @function decode
     * @memberof ModifyGroupMemberAlias
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModifyGroupMemberAlias} ModifyGroupMemberAlias
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyGroupMemberAlias.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModifyGroupMemberAlias();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupId = reader.string();
                break;
            case 2:
                message.alias = reader.string();
                break;
            case 3:
                if (!(message.toLine && message.toLine.length))
                    message.toLine = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.toLine.push(reader.int32());
                } else
                    message.toLine.push(reader.int32());
                break;
            case 4:
                message.notifyContent = $root.MessageContent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("groupId"))
            throw $util.ProtocolError("missing required 'groupId'", { instance: message });
        if (!message.hasOwnProperty("alias"))
            throw $util.ProtocolError("missing required 'alias'", { instance: message });
        return message;
    };

    /**
     * Decodes a ModifyGroupMemberAlias message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModifyGroupMemberAlias
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModifyGroupMemberAlias} ModifyGroupMemberAlias
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyGroupMemberAlias.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModifyGroupMemberAlias message.
     * @function verify
     * @memberof ModifyGroupMemberAlias
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModifyGroupMemberAlias.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.groupId))
            return "groupId: string expected";
        if (!$util.isString(message.alias))
            return "alias: string expected";
        if (message.toLine != null && message.hasOwnProperty("toLine")) {
            if (!Array.isArray(message.toLine))
                return "toLine: array expected";
            for (var i = 0; i < message.toLine.length; ++i)
                if (!$util.isInteger(message.toLine[i]))
                    return "toLine: integer[] expected";
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent")) {
            var error = $root.MessageContent.verify(message.notifyContent);
            if (error)
                return "notifyContent." + error;
        }
        return null;
    };

    /**
     * Creates a ModifyGroupMemberAlias message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModifyGroupMemberAlias
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifyGroupMemberAlias} ModifyGroupMemberAlias
     */
    ModifyGroupMemberAlias.fromObject = function fromObject(object) {
        if (object instanceof $root.ModifyGroupMemberAlias)
            return object;
        var message = new $root.ModifyGroupMemberAlias();
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        if (object.alias != null)
            message.alias = String(object.alias);
        if (object.toLine) {
            if (!Array.isArray(object.toLine))
                throw TypeError(".ModifyGroupMemberAlias.toLine: array expected");
            message.toLine = [];
            for (var i = 0; i < object.toLine.length; ++i)
                message.toLine[i] = object.toLine[i] | 0;
        }
        if (object.notifyContent != null) {
            if (typeof object.notifyContent !== "object")
                throw TypeError(".ModifyGroupMemberAlias.notifyContent: object expected");
            message.notifyContent = $root.MessageContent.fromObject(object.notifyContent);
        }
        return message;
    };

    /**
     * Creates a plain object from a ModifyGroupMemberAlias message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModifyGroupMemberAlias
     * @static
     * @param {ModifyGroupMemberAlias} message ModifyGroupMemberAlias
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModifyGroupMemberAlias.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.toLine = [];
        if (options.defaults) {
            object.groupId = "";
            object.alias = "";
            object.notifyContent = null;
        }
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.alias != null && message.hasOwnProperty("alias"))
            object.alias = message.alias;
        if (message.toLine && message.toLine.length) {
            object.toLine = [];
            for (var j = 0; j < message.toLine.length; ++j)
                object.toLine[j] = message.toLine[j];
        }
        if (message.notifyContent != null && message.hasOwnProperty("notifyContent"))
            object.notifyContent = $root.MessageContent.toObject(message.notifyContent, options);
        return object;
    };

    /**
     * Converts this ModifyGroupMemberAlias to JSON.
     * @function toJSON
     * @memberof ModifyGroupMemberAlias
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModifyGroupMemberAlias.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModifyGroupMemberAlias;
})();

$root.UserSettingEntry = (function() {

    /**
     * Properties of a UserSettingEntry.
     * @exports IUserSettingEntry
     * @interface IUserSettingEntry
     * @property {number} scope UserSettingEntry scope
     * @property {string} key UserSettingEntry key
     * @property {string} value UserSettingEntry value
     * @property {number|Long} updateDt UserSettingEntry updateDt
     */

    /**
     * Constructs a new UserSettingEntry.
     * @exports UserSettingEntry
     * @classdesc Represents a UserSettingEntry.
     * @implements IUserSettingEntry
     * @constructor
     * @param {IUserSettingEntry=} [properties] Properties to set
     */
    function UserSettingEntry(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserSettingEntry scope.
     * @member {number} scope
     * @memberof UserSettingEntry
     * @instance
     */
    UserSettingEntry.prototype.scope = 0;

    /**
     * UserSettingEntry key.
     * @member {string} key
     * @memberof UserSettingEntry
     * @instance
     */
    UserSettingEntry.prototype.key = "";

    /**
     * UserSettingEntry value.
     * @member {string} value
     * @memberof UserSettingEntry
     * @instance
     */
    UserSettingEntry.prototype.value = "";

    /**
     * UserSettingEntry updateDt.
     * @member {number|Long} updateDt
     * @memberof UserSettingEntry
     * @instance
     */
    UserSettingEntry.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new UserSettingEntry instance using the specified properties.
     * @function create
     * @memberof UserSettingEntry
     * @static
     * @param {IUserSettingEntry=} [properties] Properties to set
     * @returns {UserSettingEntry} UserSettingEntry instance
     */
    UserSettingEntry.create = function create(properties) {
        return new UserSettingEntry(properties);
    };

    /**
     * Encodes the specified UserSettingEntry message. Does not implicitly {@link UserSettingEntry.verify|verify} messages.
     * @function encode
     * @memberof UserSettingEntry
     * @static
     * @param {IUserSettingEntry} message UserSettingEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSettingEntry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.scope);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.updateDt);
        return writer;
    };

    /**
     * Encodes the specified UserSettingEntry message, length delimited. Does not implicitly {@link UserSettingEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserSettingEntry
     * @static
     * @param {IUserSettingEntry} message UserSettingEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSettingEntry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserSettingEntry message from the specified reader or buffer.
     * @function decode
     * @memberof UserSettingEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserSettingEntry} UserSettingEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSettingEntry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserSettingEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.scope = reader.int32();
                break;
            case 2:
                message.key = reader.string();
                break;
            case 3:
                message.value = reader.string();
                break;
            case 4:
                message.updateDt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("scope"))
            throw $util.ProtocolError("missing required 'scope'", { instance: message });
        if (!message.hasOwnProperty("key"))
            throw $util.ProtocolError("missing required 'key'", { instance: message });
        if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
        if (!message.hasOwnProperty("updateDt"))
            throw $util.ProtocolError("missing required 'updateDt'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserSettingEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserSettingEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserSettingEntry} UserSettingEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSettingEntry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserSettingEntry message.
     * @function verify
     * @memberof UserSettingEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserSettingEntry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.scope))
            return "scope: integer expected";
        if (!$util.isString(message.key))
            return "key: string expected";
        if (!$util.isString(message.value))
            return "value: string expected";
        if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
            return "updateDt: integer|Long expected";
        return null;
    };

    /**
     * Creates a UserSettingEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserSettingEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserSettingEntry} UserSettingEntry
     */
    UserSettingEntry.fromObject = function fromObject(object) {
        if (object instanceof $root.UserSettingEntry)
            return object;
        var message = new $root.UserSettingEntry();
        if (object.scope != null)
            message.scope = object.scope | 0;
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UserSettingEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserSettingEntry
     * @static
     * @param {UserSettingEntry} message UserSettingEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserSettingEntry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.scope = 0;
            object.key = "";
            object.value = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
        }
        if (message.scope != null && message.hasOwnProperty("scope"))
            object.scope = message.scope;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        return object;
    };

    /**
     * Converts this UserSettingEntry to JSON.
     * @function toJSON
     * @memberof UserSettingEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserSettingEntry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserSettingEntry;
})();

$root.ModifyUserSettingReq = (function() {

    /**
     * Properties of a ModifyUserSettingReq.
     * @exports IModifyUserSettingReq
     * @interface IModifyUserSettingReq
     * @property {number} scope ModifyUserSettingReq scope
     * @property {string} key ModifyUserSettingReq key
     * @property {string} value ModifyUserSettingReq value
     */

    /**
     * Constructs a new ModifyUserSettingReq.
     * @exports ModifyUserSettingReq
     * @classdesc Represents a ModifyUserSettingReq.
     * @implements IModifyUserSettingReq
     * @constructor
     * @param {IModifyUserSettingReq=} [properties] Properties to set
     */
    function ModifyUserSettingReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModifyUserSettingReq scope.
     * @member {number} scope
     * @memberof ModifyUserSettingReq
     * @instance
     */
    ModifyUserSettingReq.prototype.scope = 0;

    /**
     * ModifyUserSettingReq key.
     * @member {string} key
     * @memberof ModifyUserSettingReq
     * @instance
     */
    ModifyUserSettingReq.prototype.key = "";

    /**
     * ModifyUserSettingReq value.
     * @member {string} value
     * @memberof ModifyUserSettingReq
     * @instance
     */
    ModifyUserSettingReq.prototype.value = "";

    /**
     * Creates a new ModifyUserSettingReq instance using the specified properties.
     * @function create
     * @memberof ModifyUserSettingReq
     * @static
     * @param {IModifyUserSettingReq=} [properties] Properties to set
     * @returns {ModifyUserSettingReq} ModifyUserSettingReq instance
     */
    ModifyUserSettingReq.create = function create(properties) {
        return new ModifyUserSettingReq(properties);
    };

    /**
     * Encodes the specified ModifyUserSettingReq message. Does not implicitly {@link ModifyUserSettingReq.verify|verify} messages.
     * @function encode
     * @memberof ModifyUserSettingReq
     * @static
     * @param {IModifyUserSettingReq} message ModifyUserSettingReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyUserSettingReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.scope);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified ModifyUserSettingReq message, length delimited. Does not implicitly {@link ModifyUserSettingReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModifyUserSettingReq
     * @static
     * @param {IModifyUserSettingReq} message ModifyUserSettingReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyUserSettingReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModifyUserSettingReq message from the specified reader or buffer.
     * @function decode
     * @memberof ModifyUserSettingReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModifyUserSettingReq} ModifyUserSettingReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyUserSettingReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModifyUserSettingReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.scope = reader.int32();
                break;
            case 2:
                message.key = reader.string();
                break;
            case 3:
                message.value = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("scope"))
            throw $util.ProtocolError("missing required 'scope'", { instance: message });
        if (!message.hasOwnProperty("key"))
            throw $util.ProtocolError("missing required 'key'", { instance: message });
        if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
        return message;
    };

    /**
     * Decodes a ModifyUserSettingReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModifyUserSettingReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModifyUserSettingReq} ModifyUserSettingReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyUserSettingReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModifyUserSettingReq message.
     * @function verify
     * @memberof ModifyUserSettingReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModifyUserSettingReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.scope))
            return "scope: integer expected";
        if (!$util.isString(message.key))
            return "key: string expected";
        if (!$util.isString(message.value))
            return "value: string expected";
        return null;
    };

    /**
     * Creates a ModifyUserSettingReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModifyUserSettingReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifyUserSettingReq} ModifyUserSettingReq
     */
    ModifyUserSettingReq.fromObject = function fromObject(object) {
        if (object instanceof $root.ModifyUserSettingReq)
            return object;
        var message = new $root.ModifyUserSettingReq();
        if (object.scope != null)
            message.scope = object.scope | 0;
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a ModifyUserSettingReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModifyUserSettingReq
     * @static
     * @param {ModifyUserSettingReq} message ModifyUserSettingReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModifyUserSettingReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.scope = 0;
            object.key = "";
            object.value = "";
        }
        if (message.scope != null && message.hasOwnProperty("scope"))
            object.scope = message.scope;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this ModifyUserSettingReq to JSON.
     * @function toJSON
     * @memberof ModifyUserSettingReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModifyUserSettingReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModifyUserSettingReq;
})();

$root.Version = (function() {

    /**
     * Properties of a Version.
     * @exports IVersion
     * @interface IVersion
     * @property {number|Long} version Version version
     */

    /**
     * Constructs a new Version.
     * @exports Version
     * @classdesc Represents a Version.
     * @implements IVersion
     * @constructor
     * @param {IVersion=} [properties] Properties to set
     */
    function Version(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Version version.
     * @member {number|Long} version
     * @memberof Version
     * @instance
     */
    Version.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Version instance using the specified properties.
     * @function create
     * @memberof Version
     * @static
     * @param {IVersion=} [properties] Properties to set
     * @returns {Version} Version instance
     */
    Version.create = function create(properties) {
        return new Version(properties);
    };

    /**
     * Encodes the specified Version message. Does not implicitly {@link Version.verify|verify} messages.
     * @function encode
     * @memberof Version
     * @static
     * @param {IVersion} message Version message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Version.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.version);
        return writer;
    };

    /**
     * Encodes the specified Version message, length delimited. Does not implicitly {@link Version.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Version
     * @static
     * @param {IVersion} message Version message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Version.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Version message from the specified reader or buffer.
     * @function decode
     * @memberof Version
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Version} Version
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Version.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Version();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.version = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("version"))
            throw $util.ProtocolError("missing required 'version'", { instance: message });
        return message;
    };

    /**
     * Decodes a Version message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Version
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Version} Version
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Version.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Version message.
     * @function verify
     * @memberof Version
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Version.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
            return "version: integer|Long expected";
        return null;
    };

    /**
     * Creates a Version message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Version
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Version} Version
     */
    Version.fromObject = function fromObject(object) {
        if (object instanceof $root.Version)
            return object;
        var message = new $root.Version();
        if (object.version != null)
            if ($util.Long)
                (message.version = $util.Long.fromValue(object.version)).unsigned = false;
            else if (typeof object.version === "string")
                message.version = parseInt(object.version, 10);
            else if (typeof object.version === "number")
                message.version = object.version;
            else if (typeof object.version === "object")
                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Version message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Version
     * @static
     * @param {Version} message Version
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Version.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.version = options.longs === String ? "0" : 0;
        if (message.version != null && message.hasOwnProperty("version"))
            if (typeof message.version === "number")
                object.version = options.longs === String ? String(message.version) : message.version;
            else
                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
        return object;
    };

    /**
     * Converts this Version to JSON.
     * @function toJSON
     * @memberof Version
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Version.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Version;
})();

$root.GetUserSettingResult = (function() {

    /**
     * Properties of a GetUserSettingResult.
     * @exports IGetUserSettingResult
     * @interface IGetUserSettingResult
     * @property {Array.<IUserSettingEntry>|null} [entry] GetUserSettingResult entry
     */

    /**
     * Constructs a new GetUserSettingResult.
     * @exports GetUserSettingResult
     * @classdesc Represents a GetUserSettingResult.
     * @implements IGetUserSettingResult
     * @constructor
     * @param {IGetUserSettingResult=} [properties] Properties to set
     */
    function GetUserSettingResult(properties) {
        this.entry = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetUserSettingResult entry.
     * @member {Array.<IUserSettingEntry>} entry
     * @memberof GetUserSettingResult
     * @instance
     */
    GetUserSettingResult.prototype.entry = $util.emptyArray;

    /**
     * Creates a new GetUserSettingResult instance using the specified properties.
     * @function create
     * @memberof GetUserSettingResult
     * @static
     * @param {IGetUserSettingResult=} [properties] Properties to set
     * @returns {GetUserSettingResult} GetUserSettingResult instance
     */
    GetUserSettingResult.create = function create(properties) {
        return new GetUserSettingResult(properties);
    };

    /**
     * Encodes the specified GetUserSettingResult message. Does not implicitly {@link GetUserSettingResult.verify|verify} messages.
     * @function encode
     * @memberof GetUserSettingResult
     * @static
     * @param {IGetUserSettingResult} message GetUserSettingResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserSettingResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entry != null && message.entry.length)
            for (var i = 0; i < message.entry.length; ++i)
                $root.UserSettingEntry.encode(message.entry[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetUserSettingResult message, length delimited. Does not implicitly {@link GetUserSettingResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetUserSettingResult
     * @static
     * @param {IGetUserSettingResult} message GetUserSettingResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserSettingResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetUserSettingResult message from the specified reader or buffer.
     * @function decode
     * @memberof GetUserSettingResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetUserSettingResult} GetUserSettingResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserSettingResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetUserSettingResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entry && message.entry.length))
                    message.entry = [];
                message.entry.push($root.UserSettingEntry.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetUserSettingResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetUserSettingResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetUserSettingResult} GetUserSettingResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserSettingResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetUserSettingResult message.
     * @function verify
     * @memberof GetUserSettingResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetUserSettingResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entry != null && message.hasOwnProperty("entry")) {
            if (!Array.isArray(message.entry))
                return "entry: array expected";
            for (var i = 0; i < message.entry.length; ++i) {
                var error = $root.UserSettingEntry.verify(message.entry[i]);
                if (error)
                    return "entry." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetUserSettingResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetUserSettingResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetUserSettingResult} GetUserSettingResult
     */
    GetUserSettingResult.fromObject = function fromObject(object) {
        if (object instanceof $root.GetUserSettingResult)
            return object;
        var message = new $root.GetUserSettingResult();
        if (object.entry) {
            if (!Array.isArray(object.entry))
                throw TypeError(".GetUserSettingResult.entry: array expected");
            message.entry = [];
            for (var i = 0; i < object.entry.length; ++i) {
                if (typeof object.entry[i] !== "object")
                    throw TypeError(".GetUserSettingResult.entry: object expected");
                message.entry[i] = $root.UserSettingEntry.fromObject(object.entry[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetUserSettingResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetUserSettingResult
     * @static
     * @param {GetUserSettingResult} message GetUserSettingResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetUserSettingResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entry = [];
        if (message.entry && message.entry.length) {
            object.entry = [];
            for (var j = 0; j < message.entry.length; ++j)
                object.entry[j] = $root.UserSettingEntry.toObject(message.entry[j], options);
        }
        return object;
    };

    /**
     * Converts this GetUserSettingResult to JSON.
     * @function toJSON
     * @memberof GetUserSettingResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetUserSettingResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetUserSettingResult;
})();

$root.Friend = (function() {

    /**
     * Properties of a Friend.
     * @exports IFriend
     * @interface IFriend
     * @property {string} uid Friend uid
     * @property {number} state Friend state
     * @property {number|Long} updateDt Friend updateDt
     */

    /**
     * Constructs a new Friend.
     * @exports Friend
     * @classdesc Represents a Friend.
     * @implements IFriend
     * @constructor
     * @param {IFriend=} [properties] Properties to set
     */
    function Friend(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Friend uid.
     * @member {string} uid
     * @memberof Friend
     * @instance
     */
    Friend.prototype.uid = "";

    /**
     * Friend state.
     * @member {number} state
     * @memberof Friend
     * @instance
     */
    Friend.prototype.state = 0;

    /**
     * Friend updateDt.
     * @member {number|Long} updateDt
     * @memberof Friend
     * @instance
     */
    Friend.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Friend instance using the specified properties.
     * @function create
     * @memberof Friend
     * @static
     * @param {IFriend=} [properties] Properties to set
     * @returns {Friend} Friend instance
     */
    Friend.create = function create(properties) {
        return new Friend(properties);
    };

    /**
     * Encodes the specified Friend message. Does not implicitly {@link Friend.verify|verify} messages.
     * @function encode
     * @memberof Friend
     * @static
     * @param {IFriend} message Friend message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Friend.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.updateDt);
        return writer;
    };

    /**
     * Encodes the specified Friend message, length delimited. Does not implicitly {@link Friend.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Friend
     * @static
     * @param {IFriend} message Friend message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Friend.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Friend message from the specified reader or buffer.
     * @function decode
     * @memberof Friend
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Friend} Friend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Friend.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Friend();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.string();
                break;
            case 2:
                message.state = reader.int32();
                break;
            case 3:
                message.updateDt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: message });
        if (!message.hasOwnProperty("state"))
            throw $util.ProtocolError("missing required 'state'", { instance: message });
        if (!message.hasOwnProperty("updateDt"))
            throw $util.ProtocolError("missing required 'updateDt'", { instance: message });
        return message;
    };

    /**
     * Decodes a Friend message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Friend
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Friend} Friend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Friend.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Friend message.
     * @function verify
     * @memberof Friend
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Friend.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.uid))
            return "uid: string expected";
        if (!$util.isInteger(message.state))
            return "state: integer expected";
        if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
            return "updateDt: integer|Long expected";
        return null;
    };

    /**
     * Creates a Friend message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Friend
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Friend} Friend
     */
    Friend.fromObject = function fromObject(object) {
        if (object instanceof $root.Friend)
            return object;
        var message = new $root.Friend();
        if (object.uid != null)
            message.uid = String(object.uid);
        if (object.state != null)
            message.state = object.state | 0;
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Friend message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Friend
     * @static
     * @param {Friend} message Friend
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Friend.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uid = "";
            object.state = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        return object;
    };

    /**
     * Converts this Friend to JSON.
     * @function toJSON
     * @memberof Friend
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Friend.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Friend;
})();

$root.GetFriendsResult = (function() {

    /**
     * Properties of a GetFriendsResult.
     * @exports IGetFriendsResult
     * @interface IGetFriendsResult
     * @property {Array.<IFriend>|null} [entry] GetFriendsResult entry
     */

    /**
     * Constructs a new GetFriendsResult.
     * @exports GetFriendsResult
     * @classdesc Represents a GetFriendsResult.
     * @implements IGetFriendsResult
     * @constructor
     * @param {IGetFriendsResult=} [properties] Properties to set
     */
    function GetFriendsResult(properties) {
        this.entry = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetFriendsResult entry.
     * @member {Array.<IFriend>} entry
     * @memberof GetFriendsResult
     * @instance
     */
    GetFriendsResult.prototype.entry = $util.emptyArray;

    /**
     * Creates a new GetFriendsResult instance using the specified properties.
     * @function create
     * @memberof GetFriendsResult
     * @static
     * @param {IGetFriendsResult=} [properties] Properties to set
     * @returns {GetFriendsResult} GetFriendsResult instance
     */
    GetFriendsResult.create = function create(properties) {
        return new GetFriendsResult(properties);
    };

    /**
     * Encodes the specified GetFriendsResult message. Does not implicitly {@link GetFriendsResult.verify|verify} messages.
     * @function encode
     * @memberof GetFriendsResult
     * @static
     * @param {IGetFriendsResult} message GetFriendsResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetFriendsResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entry != null && message.entry.length)
            for (var i = 0; i < message.entry.length; ++i)
                $root.Friend.encode(message.entry[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetFriendsResult message, length delimited. Does not implicitly {@link GetFriendsResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetFriendsResult
     * @static
     * @param {IGetFriendsResult} message GetFriendsResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetFriendsResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetFriendsResult message from the specified reader or buffer.
     * @function decode
     * @memberof GetFriendsResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetFriendsResult} GetFriendsResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetFriendsResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetFriendsResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entry && message.entry.length))
                    message.entry = [];
                message.entry.push($root.Friend.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetFriendsResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetFriendsResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetFriendsResult} GetFriendsResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetFriendsResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetFriendsResult message.
     * @function verify
     * @memberof GetFriendsResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetFriendsResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entry != null && message.hasOwnProperty("entry")) {
            if (!Array.isArray(message.entry))
                return "entry: array expected";
            for (var i = 0; i < message.entry.length; ++i) {
                var error = $root.Friend.verify(message.entry[i]);
                if (error)
                    return "entry." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetFriendsResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetFriendsResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetFriendsResult} GetFriendsResult
     */
    GetFriendsResult.fromObject = function fromObject(object) {
        if (object instanceof $root.GetFriendsResult)
            return object;
        var message = new $root.GetFriendsResult();
        if (object.entry) {
            if (!Array.isArray(object.entry))
                throw TypeError(".GetFriendsResult.entry: array expected");
            message.entry = [];
            for (var i = 0; i < object.entry.length; ++i) {
                if (typeof object.entry[i] !== "object")
                    throw TypeError(".GetFriendsResult.entry: object expected");
                message.entry[i] = $root.Friend.fromObject(object.entry[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetFriendsResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetFriendsResult
     * @static
     * @param {GetFriendsResult} message GetFriendsResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetFriendsResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entry = [];
        if (message.entry && message.entry.length) {
            object.entry = [];
            for (var j = 0; j < message.entry.length; ++j)
                object.entry[j] = $root.Friend.toObject(message.entry[j], options);
        }
        return object;
    };

    /**
     * Converts this GetFriendsResult to JSON.
     * @function toJSON
     * @memberof GetFriendsResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetFriendsResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetFriendsResult;
})();

$root.GetFriendRequestResult = (function() {

    /**
     * Properties of a GetFriendRequestResult.
     * @exports IGetFriendRequestResult
     * @interface IGetFriendRequestResult
     * @property {Array.<IFriendRequest>|null} [entry] GetFriendRequestResult entry
     */

    /**
     * Constructs a new GetFriendRequestResult.
     * @exports GetFriendRequestResult
     * @classdesc Represents a GetFriendRequestResult.
     * @implements IGetFriendRequestResult
     * @constructor
     * @param {IGetFriendRequestResult=} [properties] Properties to set
     */
    function GetFriendRequestResult(properties) {
        this.entry = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetFriendRequestResult entry.
     * @member {Array.<IFriendRequest>} entry
     * @memberof GetFriendRequestResult
     * @instance
     */
    GetFriendRequestResult.prototype.entry = $util.emptyArray;

    /**
     * Creates a new GetFriendRequestResult instance using the specified properties.
     * @function create
     * @memberof GetFriendRequestResult
     * @static
     * @param {IGetFriendRequestResult=} [properties] Properties to set
     * @returns {GetFriendRequestResult} GetFriendRequestResult instance
     */
    GetFriendRequestResult.create = function create(properties) {
        return new GetFriendRequestResult(properties);
    };

    /**
     * Encodes the specified GetFriendRequestResult message. Does not implicitly {@link GetFriendRequestResult.verify|verify} messages.
     * @function encode
     * @memberof GetFriendRequestResult
     * @static
     * @param {IGetFriendRequestResult} message GetFriendRequestResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetFriendRequestResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entry != null && message.entry.length)
            for (var i = 0; i < message.entry.length; ++i)
                $root.FriendRequest.encode(message.entry[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetFriendRequestResult message, length delimited. Does not implicitly {@link GetFriendRequestResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetFriendRequestResult
     * @static
     * @param {IGetFriendRequestResult} message GetFriendRequestResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetFriendRequestResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetFriendRequestResult message from the specified reader or buffer.
     * @function decode
     * @memberof GetFriendRequestResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetFriendRequestResult} GetFriendRequestResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetFriendRequestResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetFriendRequestResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entry && message.entry.length))
                    message.entry = [];
                message.entry.push($root.FriendRequest.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetFriendRequestResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetFriendRequestResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetFriendRequestResult} GetFriendRequestResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetFriendRequestResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetFriendRequestResult message.
     * @function verify
     * @memberof GetFriendRequestResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetFriendRequestResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entry != null && message.hasOwnProperty("entry")) {
            if (!Array.isArray(message.entry))
                return "entry: array expected";
            for (var i = 0; i < message.entry.length; ++i) {
                var error = $root.FriendRequest.verify(message.entry[i]);
                if (error)
                    return "entry." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetFriendRequestResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetFriendRequestResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetFriendRequestResult} GetFriendRequestResult
     */
    GetFriendRequestResult.fromObject = function fromObject(object) {
        if (object instanceof $root.GetFriendRequestResult)
            return object;
        var message = new $root.GetFriendRequestResult();
        if (object.entry) {
            if (!Array.isArray(object.entry))
                throw TypeError(".GetFriendRequestResult.entry: array expected");
            message.entry = [];
            for (var i = 0; i < object.entry.length; ++i) {
                if (typeof object.entry[i] !== "object")
                    throw TypeError(".GetFriendRequestResult.entry: object expected");
                message.entry[i] = $root.FriendRequest.fromObject(object.entry[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetFriendRequestResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetFriendRequestResult
     * @static
     * @param {GetFriendRequestResult} message GetFriendRequestResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetFriendRequestResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entry = [];
        if (message.entry && message.entry.length) {
            object.entry = [];
            for (var j = 0; j < message.entry.length; ++j)
                object.entry[j] = $root.FriendRequest.toObject(message.entry[j], options);
        }
        return object;
    };

    /**
     * Converts this GetFriendRequestResult to JSON.
     * @function toJSON
     * @memberof GetFriendRequestResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetFriendRequestResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetFriendRequestResult;
})();

$root.ConnectAckPayload = (function() {

    /**
     * Properties of a ConnectAckPayload.
     * @exports IConnectAckPayload
     * @interface IConnectAckPayload
     * @property {number|Long|null} [msgHead] ConnectAckPayload msgHead
     * @property {number|Long|null} [friendHead] ConnectAckPayload friendHead
     * @property {number|Long|null} [friendRqHead] ConnectAckPayload friendRqHead
     * @property {number|Long|null} [settingHead] ConnectAckPayload settingHead
     * @property {string|null} [nodeAddr] ConnectAckPayload nodeAddr
     * @property {number|null} [nodePort] ConnectAckPayload nodePort
     * @property {number|Long|null} [serverTime] ConnectAckPayload serverTime
     */

    /**
     * Constructs a new ConnectAckPayload.
     * @exports ConnectAckPayload
     * @classdesc Represents a ConnectAckPayload.
     * @implements IConnectAckPayload
     * @constructor
     * @param {IConnectAckPayload=} [properties] Properties to set
     */
    function ConnectAckPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConnectAckPayload msgHead.
     * @member {number|Long} msgHead
     * @memberof ConnectAckPayload
     * @instance
     */
    ConnectAckPayload.prototype.msgHead = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ConnectAckPayload friendHead.
     * @member {number|Long} friendHead
     * @memberof ConnectAckPayload
     * @instance
     */
    ConnectAckPayload.prototype.friendHead = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ConnectAckPayload friendRqHead.
     * @member {number|Long} friendRqHead
     * @memberof ConnectAckPayload
     * @instance
     */
    ConnectAckPayload.prototype.friendRqHead = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ConnectAckPayload settingHead.
     * @member {number|Long} settingHead
     * @memberof ConnectAckPayload
     * @instance
     */
    ConnectAckPayload.prototype.settingHead = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ConnectAckPayload nodeAddr.
     * @member {string} nodeAddr
     * @memberof ConnectAckPayload
     * @instance
     */
    ConnectAckPayload.prototype.nodeAddr = "";

    /**
     * ConnectAckPayload nodePort.
     * @member {number} nodePort
     * @memberof ConnectAckPayload
     * @instance
     */
    ConnectAckPayload.prototype.nodePort = 0;

    /**
     * ConnectAckPayload serverTime.
     * @member {number|Long} serverTime
     * @memberof ConnectAckPayload
     * @instance
     */
    ConnectAckPayload.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ConnectAckPayload instance using the specified properties.
     * @function create
     * @memberof ConnectAckPayload
     * @static
     * @param {IConnectAckPayload=} [properties] Properties to set
     * @returns {ConnectAckPayload} ConnectAckPayload instance
     */
    ConnectAckPayload.create = function create(properties) {
        return new ConnectAckPayload(properties);
    };

    /**
     * Encodes the specified ConnectAckPayload message. Does not implicitly {@link ConnectAckPayload.verify|verify} messages.
     * @function encode
     * @memberof ConnectAckPayload
     * @static
     * @param {IConnectAckPayload} message ConnectAckPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectAckPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msgHead != null && message.hasOwnProperty("msgHead"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgHead);
        if (message.friendHead != null && message.hasOwnProperty("friendHead"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.friendHead);
        if (message.friendRqHead != null && message.hasOwnProperty("friendRqHead"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.friendRqHead);
        if (message.settingHead != null && message.hasOwnProperty("settingHead"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.settingHead);
        if (message.nodeAddr != null && message.hasOwnProperty("nodeAddr"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.nodeAddr);
        if (message.nodePort != null && message.hasOwnProperty("nodePort"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nodePort);
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.serverTime);
        return writer;
    };

    /**
     * Encodes the specified ConnectAckPayload message, length delimited. Does not implicitly {@link ConnectAckPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnectAckPayload
     * @static
     * @param {IConnectAckPayload} message ConnectAckPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectAckPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnectAckPayload message from the specified reader or buffer.
     * @function decode
     * @memberof ConnectAckPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnectAckPayload} ConnectAckPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectAckPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnectAckPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.msgHead = reader.int64();
                break;
            case 2:
                message.friendHead = reader.int64();
                break;
            case 3:
                message.friendRqHead = reader.int64();
                break;
            case 4:
                message.settingHead = reader.int64();
                break;
            case 5:
                message.nodeAddr = reader.string();
                break;
            case 6:
                message.nodePort = reader.int32();
                break;
            case 7:
                message.serverTime = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConnectAckPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnectAckPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnectAckPayload} ConnectAckPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectAckPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConnectAckPayload message.
     * @function verify
     * @memberof ConnectAckPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConnectAckPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msgHead != null && message.hasOwnProperty("msgHead"))
            if (!$util.isInteger(message.msgHead) && !(message.msgHead && $util.isInteger(message.msgHead.low) && $util.isInteger(message.msgHead.high)))
                return "msgHead: integer|Long expected";
        if (message.friendHead != null && message.hasOwnProperty("friendHead"))
            if (!$util.isInteger(message.friendHead) && !(message.friendHead && $util.isInteger(message.friendHead.low) && $util.isInteger(message.friendHead.high)))
                return "friendHead: integer|Long expected";
        if (message.friendRqHead != null && message.hasOwnProperty("friendRqHead"))
            if (!$util.isInteger(message.friendRqHead) && !(message.friendRqHead && $util.isInteger(message.friendRqHead.low) && $util.isInteger(message.friendRqHead.high)))
                return "friendRqHead: integer|Long expected";
        if (message.settingHead != null && message.hasOwnProperty("settingHead"))
            if (!$util.isInteger(message.settingHead) && !(message.settingHead && $util.isInteger(message.settingHead.low) && $util.isInteger(message.settingHead.high)))
                return "settingHead: integer|Long expected";
        if (message.nodeAddr != null && message.hasOwnProperty("nodeAddr"))
            if (!$util.isString(message.nodeAddr))
                return "nodeAddr: string expected";
        if (message.nodePort != null && message.hasOwnProperty("nodePort"))
            if (!$util.isInteger(message.nodePort))
                return "nodePort: integer expected";
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                return "serverTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a ConnectAckPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConnectAckPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConnectAckPayload} ConnectAckPayload
     */
    ConnectAckPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.ConnectAckPayload)
            return object;
        var message = new $root.ConnectAckPayload();
        if (object.msgHead != null)
            if ($util.Long)
                (message.msgHead = $util.Long.fromValue(object.msgHead)).unsigned = false;
            else if (typeof object.msgHead === "string")
                message.msgHead = parseInt(object.msgHead, 10);
            else if (typeof object.msgHead === "number")
                message.msgHead = object.msgHead;
            else if (typeof object.msgHead === "object")
                message.msgHead = new $util.LongBits(object.msgHead.low >>> 0, object.msgHead.high >>> 0).toNumber();
        if (object.friendHead != null)
            if ($util.Long)
                (message.friendHead = $util.Long.fromValue(object.friendHead)).unsigned = false;
            else if (typeof object.friendHead === "string")
                message.friendHead = parseInt(object.friendHead, 10);
            else if (typeof object.friendHead === "number")
                message.friendHead = object.friendHead;
            else if (typeof object.friendHead === "object")
                message.friendHead = new $util.LongBits(object.friendHead.low >>> 0, object.friendHead.high >>> 0).toNumber();
        if (object.friendRqHead != null)
            if ($util.Long)
                (message.friendRqHead = $util.Long.fromValue(object.friendRqHead)).unsigned = false;
            else if (typeof object.friendRqHead === "string")
                message.friendRqHead = parseInt(object.friendRqHead, 10);
            else if (typeof object.friendRqHead === "number")
                message.friendRqHead = object.friendRqHead;
            else if (typeof object.friendRqHead === "object")
                message.friendRqHead = new $util.LongBits(object.friendRqHead.low >>> 0, object.friendRqHead.high >>> 0).toNumber();
        if (object.settingHead != null)
            if ($util.Long)
                (message.settingHead = $util.Long.fromValue(object.settingHead)).unsigned = false;
            else if (typeof object.settingHead === "string")
                message.settingHead = parseInt(object.settingHead, 10);
            else if (typeof object.settingHead === "number")
                message.settingHead = object.settingHead;
            else if (typeof object.settingHead === "object")
                message.settingHead = new $util.LongBits(object.settingHead.low >>> 0, object.settingHead.high >>> 0).toNumber();
        if (object.nodeAddr != null)
            message.nodeAddr = String(object.nodeAddr);
        if (object.nodePort != null)
            message.nodePort = object.nodePort | 0;
        if (object.serverTime != null)
            if ($util.Long)
                (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
            else if (typeof object.serverTime === "string")
                message.serverTime = parseInt(object.serverTime, 10);
            else if (typeof object.serverTime === "number")
                message.serverTime = object.serverTime;
            else if (typeof object.serverTime === "object")
                message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ConnectAckPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConnectAckPayload
     * @static
     * @param {ConnectAckPayload} message ConnectAckPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConnectAckPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.msgHead = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.msgHead = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.friendHead = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.friendHead = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.friendRqHead = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.friendRqHead = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.settingHead = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.settingHead = options.longs === String ? "0" : 0;
            object.nodeAddr = "";
            object.nodePort = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTime = options.longs === String ? "0" : 0;
        }
        if (message.msgHead != null && message.hasOwnProperty("msgHead"))
            if (typeof message.msgHead === "number")
                object.msgHead = options.longs === String ? String(message.msgHead) : message.msgHead;
            else
                object.msgHead = options.longs === String ? $util.Long.prototype.toString.call(message.msgHead) : options.longs === Number ? new $util.LongBits(message.msgHead.low >>> 0, message.msgHead.high >>> 0).toNumber() : message.msgHead;
        if (message.friendHead != null && message.hasOwnProperty("friendHead"))
            if (typeof message.friendHead === "number")
                object.friendHead = options.longs === String ? String(message.friendHead) : message.friendHead;
            else
                object.friendHead = options.longs === String ? $util.Long.prototype.toString.call(message.friendHead) : options.longs === Number ? new $util.LongBits(message.friendHead.low >>> 0, message.friendHead.high >>> 0).toNumber() : message.friendHead;
        if (message.friendRqHead != null && message.hasOwnProperty("friendRqHead"))
            if (typeof message.friendRqHead === "number")
                object.friendRqHead = options.longs === String ? String(message.friendRqHead) : message.friendRqHead;
            else
                object.friendRqHead = options.longs === String ? $util.Long.prototype.toString.call(message.friendRqHead) : options.longs === Number ? new $util.LongBits(message.friendRqHead.low >>> 0, message.friendRqHead.high >>> 0).toNumber() : message.friendRqHead;
        if (message.settingHead != null && message.hasOwnProperty("settingHead"))
            if (typeof message.settingHead === "number")
                object.settingHead = options.longs === String ? String(message.settingHead) : message.settingHead;
            else
                object.settingHead = options.longs === String ? $util.Long.prototype.toString.call(message.settingHead) : options.longs === Number ? new $util.LongBits(message.settingHead.low >>> 0, message.settingHead.high >>> 0).toNumber() : message.settingHead;
        if (message.nodeAddr != null && message.hasOwnProperty("nodeAddr"))
            object.nodeAddr = message.nodeAddr;
        if (message.nodePort != null && message.hasOwnProperty("nodePort"))
            object.nodePort = message.nodePort;
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (typeof message.serverTime === "number")
                object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
            else
                object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
        return object;
    };

    /**
     * Converts this ConnectAckPayload to JSON.
     * @function toJSON
     * @memberof ConnectAckPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConnectAckPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConnectAckPayload;
})();

$root.IMHttpWrapper = (function() {

    /**
     * Properties of a IMHttpWrapper.
     * @exports IIMHttpWrapper
     * @interface IIMHttpWrapper
     * @property {string} token IMHttpWrapper token
     * @property {string} clientId IMHttpWrapper clientId
     * @property {string} request IMHttpWrapper request
     * @property {Uint8Array|null} [data] IMHttpWrapper data
     */

    /**
     * Constructs a new IMHttpWrapper.
     * @exports IMHttpWrapper
     * @classdesc Represents a IMHttpWrapper.
     * @implements IIMHttpWrapper
     * @constructor
     * @param {IIMHttpWrapper=} [properties] Properties to set
     */
    function IMHttpWrapper(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMHttpWrapper token.
     * @member {string} token
     * @memberof IMHttpWrapper
     * @instance
     */
    IMHttpWrapper.prototype.token = "";

    /**
     * IMHttpWrapper clientId.
     * @member {string} clientId
     * @memberof IMHttpWrapper
     * @instance
     */
    IMHttpWrapper.prototype.clientId = "";

    /**
     * IMHttpWrapper request.
     * @member {string} request
     * @memberof IMHttpWrapper
     * @instance
     */
    IMHttpWrapper.prototype.request = "";

    /**
     * IMHttpWrapper data.
     * @member {Uint8Array} data
     * @memberof IMHttpWrapper
     * @instance
     */
    IMHttpWrapper.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new IMHttpWrapper instance using the specified properties.
     * @function create
     * @memberof IMHttpWrapper
     * @static
     * @param {IIMHttpWrapper=} [properties] Properties to set
     * @returns {IMHttpWrapper} IMHttpWrapper instance
     */
    IMHttpWrapper.create = function create(properties) {
        return new IMHttpWrapper(properties);
    };

    /**
     * Encodes the specified IMHttpWrapper message. Does not implicitly {@link IMHttpWrapper.verify|verify} messages.
     * @function encode
     * @memberof IMHttpWrapper
     * @static
     * @param {IIMHttpWrapper} message IMHttpWrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMHttpWrapper.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.request);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified IMHttpWrapper message, length delimited. Does not implicitly {@link IMHttpWrapper.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IMHttpWrapper
     * @static
     * @param {IIMHttpWrapper} message IMHttpWrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMHttpWrapper.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMHttpWrapper message from the specified reader or buffer.
     * @function decode
     * @memberof IMHttpWrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IMHttpWrapper} IMHttpWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMHttpWrapper.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IMHttpWrapper();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            case 2:
                message.clientId = reader.string();
                break;
            case 3:
                message.request = reader.string();
                break;
            case 4:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("token"))
            throw $util.ProtocolError("missing required 'token'", { instance: message });
        if (!message.hasOwnProperty("clientId"))
            throw $util.ProtocolError("missing required 'clientId'", { instance: message });
        if (!message.hasOwnProperty("request"))
            throw $util.ProtocolError("missing required 'request'", { instance: message });
        return message;
    };

    /**
     * Decodes a IMHttpWrapper message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IMHttpWrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IMHttpWrapper} IMHttpWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMHttpWrapper.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMHttpWrapper message.
     * @function verify
     * @memberof IMHttpWrapper
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMHttpWrapper.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.token))
            return "token: string expected";
        if (!$util.isString(message.clientId))
            return "clientId: string expected";
        if (!$util.isString(message.request))
            return "request: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a IMHttpWrapper message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IMHttpWrapper
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IMHttpWrapper} IMHttpWrapper
     */
    IMHttpWrapper.fromObject = function fromObject(object) {
        if (object instanceof $root.IMHttpWrapper)
            return object;
        var message = new $root.IMHttpWrapper();
        if (object.token != null)
            message.token = String(object.token);
        if (object.clientId != null)
            message.clientId = String(object.clientId);
        if (object.request != null)
            message.request = String(object.request);
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a IMHttpWrapper message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IMHttpWrapper
     * @static
     * @param {IMHttpWrapper} message IMHttpWrapper
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMHttpWrapper.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.token = "";
            object.clientId = "";
            object.request = "";
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            object.clientId = message.clientId;
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = message.request;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this IMHttpWrapper to JSON.
     * @function toJSON
     * @memberof IMHttpWrapper
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMHttpWrapper.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMHttpWrapper;
})();

$root.SearchUserRequest = (function() {

    /**
     * Properties of a SearchUserRequest.
     * @exports ISearchUserRequest
     * @interface ISearchUserRequest
     * @property {string} keyword SearchUserRequest keyword
     * @property {number|null} [fuzzy] SearchUserRequest fuzzy
     * @property {number|null} [page] SearchUserRequest page
     */

    /**
     * Constructs a new SearchUserRequest.
     * @exports SearchUserRequest
     * @classdesc Represents a SearchUserRequest.
     * @implements ISearchUserRequest
     * @constructor
     * @param {ISearchUserRequest=} [properties] Properties to set
     */
    function SearchUserRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SearchUserRequest keyword.
     * @member {string} keyword
     * @memberof SearchUserRequest
     * @instance
     */
    SearchUserRequest.prototype.keyword = "";

    /**
     * SearchUserRequest fuzzy.
     * @member {number} fuzzy
     * @memberof SearchUserRequest
     * @instance
     */
    SearchUserRequest.prototype.fuzzy = 0;

    /**
     * SearchUserRequest page.
     * @member {number} page
     * @memberof SearchUserRequest
     * @instance
     */
    SearchUserRequest.prototype.page = 0;

    /**
     * Creates a new SearchUserRequest instance using the specified properties.
     * @function create
     * @memberof SearchUserRequest
     * @static
     * @param {ISearchUserRequest=} [properties] Properties to set
     * @returns {SearchUserRequest} SearchUserRequest instance
     */
    SearchUserRequest.create = function create(properties) {
        return new SearchUserRequest(properties);
    };

    /**
     * Encodes the specified SearchUserRequest message. Does not implicitly {@link SearchUserRequest.verify|verify} messages.
     * @function encode
     * @memberof SearchUserRequest
     * @static
     * @param {ISearchUserRequest} message SearchUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchUserRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.keyword);
        if (message.fuzzy != null && message.hasOwnProperty("fuzzy"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fuzzy);
        if (message.page != null && message.hasOwnProperty("page"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.page);
        return writer;
    };

    /**
     * Encodes the specified SearchUserRequest message, length delimited. Does not implicitly {@link SearchUserRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SearchUserRequest
     * @static
     * @param {ISearchUserRequest} message SearchUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SearchUserRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SearchUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SearchUserRequest} SearchUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchUserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SearchUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.keyword = reader.string();
                break;
            case 2:
                message.fuzzy = reader.int32();
                break;
            case 3:
                message.page = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("keyword"))
            throw $util.ProtocolError("missing required 'keyword'", { instance: message });
        return message;
    };

    /**
     * Decodes a SearchUserRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SearchUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SearchUserRequest} SearchUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchUserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SearchUserRequest message.
     * @function verify
     * @memberof SearchUserRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SearchUserRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.keyword))
            return "keyword: string expected";
        if (message.fuzzy != null && message.hasOwnProperty("fuzzy"))
            if (!$util.isInteger(message.fuzzy))
                return "fuzzy: integer expected";
        if (message.page != null && message.hasOwnProperty("page"))
            if (!$util.isInteger(message.page))
                return "page: integer expected";
        return null;
    };

    /**
     * Creates a SearchUserRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SearchUserRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SearchUserRequest} SearchUserRequest
     */
    SearchUserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SearchUserRequest)
            return object;
        var message = new $root.SearchUserRequest();
        if (object.keyword != null)
            message.keyword = String(object.keyword);
        if (object.fuzzy != null)
            message.fuzzy = object.fuzzy | 0;
        if (object.page != null)
            message.page = object.page | 0;
        return message;
    };

    /**
     * Creates a plain object from a SearchUserRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SearchUserRequest
     * @static
     * @param {SearchUserRequest} message SearchUserRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SearchUserRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.keyword = "";
            object.fuzzy = 0;
            object.page = 0;
        }
        if (message.keyword != null && message.hasOwnProperty("keyword"))
            object.keyword = message.keyword;
        if (message.fuzzy != null && message.hasOwnProperty("fuzzy"))
            object.fuzzy = message.fuzzy;
        if (message.page != null && message.hasOwnProperty("page"))
            object.page = message.page;
        return object;
    };

    /**
     * Converts this SearchUserRequest to JSON.
     * @function toJSON
     * @memberof SearchUserRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SearchUserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SearchUserRequest;
})();

$root.SearchUserResult = (function() {

    /**
     * Properties of a SearchUserResult.
     * @exports ISearchUserResult
     * @interface ISearchUserResult
     * @property {Array.<IUser>|null} [entry] SearchUserResult entry
     */

    /**
     * Constructs a new SearchUserResult.
     * @exports SearchUserResult
     * @classdesc Represents a SearchUserResult.
     * @implements ISearchUserResult
     * @constructor
     * @param {ISearchUserResult=} [properties] Properties to set
     */
    function SearchUserResult(properties) {
        this.entry = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SearchUserResult entry.
     * @member {Array.<IUser>} entry
     * @memberof SearchUserResult
     * @instance
     */
    SearchUserResult.prototype.entry = $util.emptyArray;

    /**
     * Creates a new SearchUserResult instance using the specified properties.
     * @function create
     * @memberof SearchUserResult
     * @static
     * @param {ISearchUserResult=} [properties] Properties to set
     * @returns {SearchUserResult} SearchUserResult instance
     */
    SearchUserResult.create = function create(properties) {
        return new SearchUserResult(properties);
    };

    /**
     * Encodes the specified SearchUserResult message. Does not implicitly {@link SearchUserResult.verify|verify} messages.
     * @function encode
     * @memberof SearchUserResult
     * @static
     * @param {ISearchUserResult} message SearchUserResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchUserResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entry != null && message.entry.length)
            for (var i = 0; i < message.entry.length; ++i)
                $root.User.encode(message.entry[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SearchUserResult message, length delimited. Does not implicitly {@link SearchUserResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SearchUserResult
     * @static
     * @param {ISearchUserResult} message SearchUserResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchUserResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SearchUserResult message from the specified reader or buffer.
     * @function decode
     * @memberof SearchUserResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SearchUserResult} SearchUserResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchUserResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SearchUserResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entry && message.entry.length))
                    message.entry = [];
                message.entry.push($root.User.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SearchUserResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SearchUserResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SearchUserResult} SearchUserResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchUserResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SearchUserResult message.
     * @function verify
     * @memberof SearchUserResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SearchUserResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entry != null && message.hasOwnProperty("entry")) {
            if (!Array.isArray(message.entry))
                return "entry: array expected";
            for (var i = 0; i < message.entry.length; ++i) {
                var error = $root.User.verify(message.entry[i]);
                if (error)
                    return "entry." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SearchUserResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SearchUserResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SearchUserResult} SearchUserResult
     */
    SearchUserResult.fromObject = function fromObject(object) {
        if (object instanceof $root.SearchUserResult)
            return object;
        var message = new $root.SearchUserResult();
        if (object.entry) {
            if (!Array.isArray(object.entry))
                throw TypeError(".SearchUserResult.entry: array expected");
            message.entry = [];
            for (var i = 0; i < object.entry.length; ++i) {
                if (typeof object.entry[i] !== "object")
                    throw TypeError(".SearchUserResult.entry: object expected");
                message.entry[i] = $root.User.fromObject(object.entry[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SearchUserResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SearchUserResult
     * @static
     * @param {SearchUserResult} message SearchUserResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SearchUserResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entry = [];
        if (message.entry && message.entry.length) {
            object.entry = [];
            for (var j = 0; j < message.entry.length; ++j)
                object.entry[j] = $root.User.toObject(message.entry[j], options);
        }
        return object;
    };

    /**
     * Converts this SearchUserResult to JSON.
     * @function toJSON
     * @memberof SearchUserResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SearchUserResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SearchUserResult;
})();

$root.GetChatroomInfoRequest = (function() {

    /**
     * Properties of a GetChatroomInfoRequest.
     * @exports IGetChatroomInfoRequest
     * @interface IGetChatroomInfoRequest
     * @property {string} chatroomId GetChatroomInfoRequest chatroomId
     * @property {number|Long|null} [updateDt] GetChatroomInfoRequest updateDt
     */

    /**
     * Constructs a new GetChatroomInfoRequest.
     * @exports GetChatroomInfoRequest
     * @classdesc Represents a GetChatroomInfoRequest.
     * @implements IGetChatroomInfoRequest
     * @constructor
     * @param {IGetChatroomInfoRequest=} [properties] Properties to set
     */
    function GetChatroomInfoRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetChatroomInfoRequest chatroomId.
     * @member {string} chatroomId
     * @memberof GetChatroomInfoRequest
     * @instance
     */
    GetChatroomInfoRequest.prototype.chatroomId = "";

    /**
     * GetChatroomInfoRequest updateDt.
     * @member {number|Long} updateDt
     * @memberof GetChatroomInfoRequest
     * @instance
     */
    GetChatroomInfoRequest.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetChatroomInfoRequest instance using the specified properties.
     * @function create
     * @memberof GetChatroomInfoRequest
     * @static
     * @param {IGetChatroomInfoRequest=} [properties] Properties to set
     * @returns {GetChatroomInfoRequest} GetChatroomInfoRequest instance
     */
    GetChatroomInfoRequest.create = function create(properties) {
        return new GetChatroomInfoRequest(properties);
    };

    /**
     * Encodes the specified GetChatroomInfoRequest message. Does not implicitly {@link GetChatroomInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof GetChatroomInfoRequest
     * @static
     * @param {IGetChatroomInfoRequest} message GetChatroomInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetChatroomInfoRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatroomId);
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.updateDt);
        return writer;
    };

    /**
     * Encodes the specified GetChatroomInfoRequest message, length delimited. Does not implicitly {@link GetChatroomInfoRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetChatroomInfoRequest
     * @static
     * @param {IGetChatroomInfoRequest} message GetChatroomInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetChatroomInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetChatroomInfoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetChatroomInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetChatroomInfoRequest} GetChatroomInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetChatroomInfoRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetChatroomInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chatroomId = reader.string();
                break;
            case 2:
                message.updateDt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chatroomId"))
            throw $util.ProtocolError("missing required 'chatroomId'", { instance: message });
        return message;
    };

    /**
     * Decodes a GetChatroomInfoRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetChatroomInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetChatroomInfoRequest} GetChatroomInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetChatroomInfoRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetChatroomInfoRequest message.
     * @function verify
     * @memberof GetChatroomInfoRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetChatroomInfoRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.chatroomId))
            return "chatroomId: string expected";
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
                return "updateDt: integer|Long expected";
        return null;
    };

    /**
     * Creates a GetChatroomInfoRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetChatroomInfoRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetChatroomInfoRequest} GetChatroomInfoRequest
     */
    GetChatroomInfoRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetChatroomInfoRequest)
            return object;
        var message = new $root.GetChatroomInfoRequest();
        if (object.chatroomId != null)
            message.chatroomId = String(object.chatroomId);
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GetChatroomInfoRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetChatroomInfoRequest
     * @static
     * @param {GetChatroomInfoRequest} message GetChatroomInfoRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetChatroomInfoRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chatroomId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
        }
        if (message.chatroomId != null && message.hasOwnProperty("chatroomId"))
            object.chatroomId = message.chatroomId;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        return object;
    };

    /**
     * Converts this GetChatroomInfoRequest to JSON.
     * @function toJSON
     * @memberof GetChatroomInfoRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetChatroomInfoRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetChatroomInfoRequest;
})();

/**
 * ChatroomState enum.
 * @exports ChatroomState
 * @enum {string}
 * @property {number} Chatroom_State_Normal=0 Chatroom_State_Normal value
 * @property {number} Chatroom_State_NotStart=1 Chatroom_State_NotStart value
 * @property {number} Chatroom_State_End=2 Chatroom_State_End value
 */
$root.ChatroomState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Chatroom_State_Normal"] = 0;
    values[valuesById[1] = "Chatroom_State_NotStart"] = 1;
    values[valuesById[2] = "Chatroom_State_End"] = 2;
    return values;
})();

$root.ChatroomInfo = (function() {

    /**
     * Properties of a ChatroomInfo.
     * @exports IChatroomInfo
     * @interface IChatroomInfo
     * @property {string} title ChatroomInfo title
     * @property {string|null} [desc] ChatroomInfo desc
     * @property {string|null} [portrait] ChatroomInfo portrait
     * @property {number|null} [memberCount] ChatroomInfo memberCount
     * @property {number|Long|null} [createDt] ChatroomInfo createDt
     * @property {number|Long|null} [updateDt] ChatroomInfo updateDt
     * @property {string|null} [extra] ChatroomInfo extra
     * @property {ChatroomState|null} [state] ChatroomInfo state
     */

    /**
     * Constructs a new ChatroomInfo.
     * @exports ChatroomInfo
     * @classdesc Represents a ChatroomInfo.
     * @implements IChatroomInfo
     * @constructor
     * @param {IChatroomInfo=} [properties] Properties to set
     */
    function ChatroomInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatroomInfo title.
     * @member {string} title
     * @memberof ChatroomInfo
     * @instance
     */
    ChatroomInfo.prototype.title = "";

    /**
     * ChatroomInfo desc.
     * @member {string} desc
     * @memberof ChatroomInfo
     * @instance
     */
    ChatroomInfo.prototype.desc = "";

    /**
     * ChatroomInfo portrait.
     * @member {string} portrait
     * @memberof ChatroomInfo
     * @instance
     */
    ChatroomInfo.prototype.portrait = "";

    /**
     * ChatroomInfo memberCount.
     * @member {number} memberCount
     * @memberof ChatroomInfo
     * @instance
     */
    ChatroomInfo.prototype.memberCount = 0;

    /**
     * ChatroomInfo createDt.
     * @member {number|Long} createDt
     * @memberof ChatroomInfo
     * @instance
     */
    ChatroomInfo.prototype.createDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ChatroomInfo updateDt.
     * @member {number|Long} updateDt
     * @memberof ChatroomInfo
     * @instance
     */
    ChatroomInfo.prototype.updateDt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ChatroomInfo extra.
     * @member {string} extra
     * @memberof ChatroomInfo
     * @instance
     */
    ChatroomInfo.prototype.extra = "";

    /**
     * ChatroomInfo state.
     * @member {ChatroomState} state
     * @memberof ChatroomInfo
     * @instance
     */
    ChatroomInfo.prototype.state = 0;

    /**
     * Creates a new ChatroomInfo instance using the specified properties.
     * @function create
     * @memberof ChatroomInfo
     * @static
     * @param {IChatroomInfo=} [properties] Properties to set
     * @returns {ChatroomInfo} ChatroomInfo instance
     */
    ChatroomInfo.create = function create(properties) {
        return new ChatroomInfo(properties);
    };

    /**
     * Encodes the specified ChatroomInfo message. Does not implicitly {@link ChatroomInfo.verify|verify} messages.
     * @function encode
     * @memberof ChatroomInfo
     * @static
     * @param {IChatroomInfo} message ChatroomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatroomInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
        if (message.desc != null && message.hasOwnProperty("desc"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.portrait);
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.memberCount);
        if (message.createDt != null && message.hasOwnProperty("createDt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.createDt);
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.updateDt);
        if (message.extra != null && message.hasOwnProperty("extra"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.extra);
        if (message.state != null && message.hasOwnProperty("state"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.state);
        return writer;
    };

    /**
     * Encodes the specified ChatroomInfo message, length delimited. Does not implicitly {@link ChatroomInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatroomInfo
     * @static
     * @param {IChatroomInfo} message ChatroomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatroomInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatroomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ChatroomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatroomInfo} ChatroomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatroomInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatroomInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.title = reader.string();
                break;
            case 2:
                message.desc = reader.string();
                break;
            case 3:
                message.portrait = reader.string();
                break;
            case 4:
                message.memberCount = reader.int32();
                break;
            case 5:
                message.createDt = reader.int64();
                break;
            case 6:
                message.updateDt = reader.int64();
                break;
            case 7:
                message.extra = reader.string();
                break;
            case 8:
                message.state = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("title"))
            throw $util.ProtocolError("missing required 'title'", { instance: message });
        return message;
    };

    /**
     * Decodes a ChatroomInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatroomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatroomInfo} ChatroomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatroomInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatroomInfo message.
     * @function verify
     * @memberof ChatroomInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatroomInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.title))
            return "title: string expected";
        if (message.desc != null && message.hasOwnProperty("desc"))
            if (!$util.isString(message.desc))
                return "desc: string expected";
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            if (!$util.isString(message.portrait))
                return "portrait: string expected";
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            if (!$util.isInteger(message.memberCount))
                return "memberCount: integer expected";
        if (message.createDt != null && message.hasOwnProperty("createDt"))
            if (!$util.isInteger(message.createDt) && !(message.createDt && $util.isInteger(message.createDt.low) && $util.isInteger(message.createDt.high)))
                return "createDt: integer|Long expected";
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (!$util.isInteger(message.updateDt) && !(message.updateDt && $util.isInteger(message.updateDt.low) && $util.isInteger(message.updateDt.high)))
                return "updateDt: integer|Long expected";
        if (message.extra != null && message.hasOwnProperty("extra"))
            if (!$util.isString(message.extra))
                return "extra: string expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a ChatroomInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatroomInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatroomInfo} ChatroomInfo
     */
    ChatroomInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatroomInfo)
            return object;
        var message = new $root.ChatroomInfo();
        if (object.title != null)
            message.title = String(object.title);
        if (object.desc != null)
            message.desc = String(object.desc);
        if (object.portrait != null)
            message.portrait = String(object.portrait);
        if (object.memberCount != null)
            message.memberCount = object.memberCount | 0;
        if (object.createDt != null)
            if ($util.Long)
                (message.createDt = $util.Long.fromValue(object.createDt)).unsigned = false;
            else if (typeof object.createDt === "string")
                message.createDt = parseInt(object.createDt, 10);
            else if (typeof object.createDt === "number")
                message.createDt = object.createDt;
            else if (typeof object.createDt === "object")
                message.createDt = new $util.LongBits(object.createDt.low >>> 0, object.createDt.high >>> 0).toNumber();
        if (object.updateDt != null)
            if ($util.Long)
                (message.updateDt = $util.Long.fromValue(object.updateDt)).unsigned = false;
            else if (typeof object.updateDt === "string")
                message.updateDt = parseInt(object.updateDt, 10);
            else if (typeof object.updateDt === "number")
                message.updateDt = object.updateDt;
            else if (typeof object.updateDt === "object")
                message.updateDt = new $util.LongBits(object.updateDt.low >>> 0, object.updateDt.high >>> 0).toNumber();
        if (object.extra != null)
            message.extra = String(object.extra);
        switch (object.state) {
        case "Chatroom_State_Normal":
        case 0:
            message.state = 0;
            break;
        case "Chatroom_State_NotStart":
        case 1:
            message.state = 1;
            break;
        case "Chatroom_State_End":
        case 2:
            message.state = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a ChatroomInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatroomInfo
     * @static
     * @param {ChatroomInfo} message ChatroomInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatroomInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.title = "";
            object.desc = "";
            object.portrait = "";
            object.memberCount = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createDt = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateDt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateDt = options.longs === String ? "0" : 0;
            object.extra = "";
            object.state = options.enums === String ? "Chatroom_State_Normal" : 0;
        }
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        if (message.portrait != null && message.hasOwnProperty("portrait"))
            object.portrait = message.portrait;
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            object.memberCount = message.memberCount;
        if (message.createDt != null && message.hasOwnProperty("createDt"))
            if (typeof message.createDt === "number")
                object.createDt = options.longs === String ? String(message.createDt) : message.createDt;
            else
                object.createDt = options.longs === String ? $util.Long.prototype.toString.call(message.createDt) : options.longs === Number ? new $util.LongBits(message.createDt.low >>> 0, message.createDt.high >>> 0).toNumber() : message.createDt;
        if (message.updateDt != null && message.hasOwnProperty("updateDt"))
            if (typeof message.updateDt === "number")
                object.updateDt = options.longs === String ? String(message.updateDt) : message.updateDt;
            else
                object.updateDt = options.longs === String ? $util.Long.prototype.toString.call(message.updateDt) : options.longs === Number ? new $util.LongBits(message.updateDt.low >>> 0, message.updateDt.high >>> 0).toNumber() : message.updateDt;
        if (message.extra != null && message.hasOwnProperty("extra"))
            object.extra = message.extra;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.enums === String ? $root.ChatroomState[message.state] : message.state;
        return object;
    };

    /**
     * Converts this ChatroomInfo to JSON.
     * @function toJSON
     * @memberof ChatroomInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatroomInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatroomInfo;
})();

$root.GetChatroomMemberInfoRequest = (function() {

    /**
     * Properties of a GetChatroomMemberInfoRequest.
     * @exports IGetChatroomMemberInfoRequest
     * @interface IGetChatroomMemberInfoRequest
     * @property {string} chatroomId GetChatroomMemberInfoRequest chatroomId
     * @property {number|null} [maxCount] GetChatroomMemberInfoRequest maxCount
     */

    /**
     * Constructs a new GetChatroomMemberInfoRequest.
     * @exports GetChatroomMemberInfoRequest
     * @classdesc Represents a GetChatroomMemberInfoRequest.
     * @implements IGetChatroomMemberInfoRequest
     * @constructor
     * @param {IGetChatroomMemberInfoRequest=} [properties] Properties to set
     */
    function GetChatroomMemberInfoRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetChatroomMemberInfoRequest chatroomId.
     * @member {string} chatroomId
     * @memberof GetChatroomMemberInfoRequest
     * @instance
     */
    GetChatroomMemberInfoRequest.prototype.chatroomId = "";

    /**
     * GetChatroomMemberInfoRequest maxCount.
     * @member {number} maxCount
     * @memberof GetChatroomMemberInfoRequest
     * @instance
     */
    GetChatroomMemberInfoRequest.prototype.maxCount = 0;

    /**
     * Creates a new GetChatroomMemberInfoRequest instance using the specified properties.
     * @function create
     * @memberof GetChatroomMemberInfoRequest
     * @static
     * @param {IGetChatroomMemberInfoRequest=} [properties] Properties to set
     * @returns {GetChatroomMemberInfoRequest} GetChatroomMemberInfoRequest instance
     */
    GetChatroomMemberInfoRequest.create = function create(properties) {
        return new GetChatroomMemberInfoRequest(properties);
    };

    /**
     * Encodes the specified GetChatroomMemberInfoRequest message. Does not implicitly {@link GetChatroomMemberInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof GetChatroomMemberInfoRequest
     * @static
     * @param {IGetChatroomMemberInfoRequest} message GetChatroomMemberInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetChatroomMemberInfoRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatroomId);
        if (message.maxCount != null && message.hasOwnProperty("maxCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxCount);
        return writer;
    };

    /**
     * Encodes the specified GetChatroomMemberInfoRequest message, length delimited. Does not implicitly {@link GetChatroomMemberInfoRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetChatroomMemberInfoRequest
     * @static
     * @param {IGetChatroomMemberInfoRequest} message GetChatroomMemberInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetChatroomMemberInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetChatroomMemberInfoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetChatroomMemberInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetChatroomMemberInfoRequest} GetChatroomMemberInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetChatroomMemberInfoRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetChatroomMemberInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chatroomId = reader.string();
                break;
            case 2:
                message.maxCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chatroomId"))
            throw $util.ProtocolError("missing required 'chatroomId'", { instance: message });
        return message;
    };

    /**
     * Decodes a GetChatroomMemberInfoRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetChatroomMemberInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetChatroomMemberInfoRequest} GetChatroomMemberInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetChatroomMemberInfoRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetChatroomMemberInfoRequest message.
     * @function verify
     * @memberof GetChatroomMemberInfoRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetChatroomMemberInfoRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.chatroomId))
            return "chatroomId: string expected";
        if (message.maxCount != null && message.hasOwnProperty("maxCount"))
            if (!$util.isInteger(message.maxCount))
                return "maxCount: integer expected";
        return null;
    };

    /**
     * Creates a GetChatroomMemberInfoRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetChatroomMemberInfoRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetChatroomMemberInfoRequest} GetChatroomMemberInfoRequest
     */
    GetChatroomMemberInfoRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetChatroomMemberInfoRequest)
            return object;
        var message = new $root.GetChatroomMemberInfoRequest();
        if (object.chatroomId != null)
            message.chatroomId = String(object.chatroomId);
        if (object.maxCount != null)
            message.maxCount = object.maxCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a GetChatroomMemberInfoRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetChatroomMemberInfoRequest
     * @static
     * @param {GetChatroomMemberInfoRequest} message GetChatroomMemberInfoRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetChatroomMemberInfoRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chatroomId = "";
            object.maxCount = 0;
        }
        if (message.chatroomId != null && message.hasOwnProperty("chatroomId"))
            object.chatroomId = message.chatroomId;
        if (message.maxCount != null && message.hasOwnProperty("maxCount"))
            object.maxCount = message.maxCount;
        return object;
    };

    /**
     * Converts this GetChatroomMemberInfoRequest to JSON.
     * @function toJSON
     * @memberof GetChatroomMemberInfoRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetChatroomMemberInfoRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetChatroomMemberInfoRequest;
})();

$root.ChatroomMemberInfo = (function() {

    /**
     * Properties of a ChatroomMemberInfo.
     * @exports IChatroomMemberInfo
     * @interface IChatroomMemberInfo
     * @property {number|null} [memberCount] ChatroomMemberInfo memberCount
     * @property {Array.<string>|null} [members] ChatroomMemberInfo members
     */

    /**
     * Constructs a new ChatroomMemberInfo.
     * @exports ChatroomMemberInfo
     * @classdesc Represents a ChatroomMemberInfo.
     * @implements IChatroomMemberInfo
     * @constructor
     * @param {IChatroomMemberInfo=} [properties] Properties to set
     */
    function ChatroomMemberInfo(properties) {
        this.members = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatroomMemberInfo memberCount.
     * @member {number} memberCount
     * @memberof ChatroomMemberInfo
     * @instance
     */
    ChatroomMemberInfo.prototype.memberCount = 0;

    /**
     * ChatroomMemberInfo members.
     * @member {Array.<string>} members
     * @memberof ChatroomMemberInfo
     * @instance
     */
    ChatroomMemberInfo.prototype.members = $util.emptyArray;

    /**
     * Creates a new ChatroomMemberInfo instance using the specified properties.
     * @function create
     * @memberof ChatroomMemberInfo
     * @static
     * @param {IChatroomMemberInfo=} [properties] Properties to set
     * @returns {ChatroomMemberInfo} ChatroomMemberInfo instance
     */
    ChatroomMemberInfo.create = function create(properties) {
        return new ChatroomMemberInfo(properties);
    };

    /**
     * Encodes the specified ChatroomMemberInfo message. Does not implicitly {@link ChatroomMemberInfo.verify|verify} messages.
     * @function encode
     * @memberof ChatroomMemberInfo
     * @static
     * @param {IChatroomMemberInfo} message ChatroomMemberInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatroomMemberInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.memberCount);
        if (message.members != null && message.members.length)
            for (var i = 0; i < message.members.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.members[i]);
        return writer;
    };

    /**
     * Encodes the specified ChatroomMemberInfo message, length delimited. Does not implicitly {@link ChatroomMemberInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatroomMemberInfo
     * @static
     * @param {IChatroomMemberInfo} message ChatroomMemberInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatroomMemberInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatroomMemberInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ChatroomMemberInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatroomMemberInfo} ChatroomMemberInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatroomMemberInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatroomMemberInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.memberCount = reader.int32();
                break;
            case 2:
                if (!(message.members && message.members.length))
                    message.members = [];
                message.members.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatroomMemberInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatroomMemberInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatroomMemberInfo} ChatroomMemberInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatroomMemberInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatroomMemberInfo message.
     * @function verify
     * @memberof ChatroomMemberInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatroomMemberInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            if (!$util.isInteger(message.memberCount))
                return "memberCount: integer expected";
        if (message.members != null && message.hasOwnProperty("members")) {
            if (!Array.isArray(message.members))
                return "members: array expected";
            for (var i = 0; i < message.members.length; ++i)
                if (!$util.isString(message.members[i]))
                    return "members: string[] expected";
        }
        return null;
    };

    /**
     * Creates a ChatroomMemberInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatroomMemberInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatroomMemberInfo} ChatroomMemberInfo
     */
    ChatroomMemberInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatroomMemberInfo)
            return object;
        var message = new $root.ChatroomMemberInfo();
        if (object.memberCount != null)
            message.memberCount = object.memberCount | 0;
        if (object.members) {
            if (!Array.isArray(object.members))
                throw TypeError(".ChatroomMemberInfo.members: array expected");
            message.members = [];
            for (var i = 0; i < object.members.length; ++i)
                message.members[i] = String(object.members[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChatroomMemberInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatroomMemberInfo
     * @static
     * @param {ChatroomMemberInfo} message ChatroomMemberInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatroomMemberInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.members = [];
        if (options.defaults)
            object.memberCount = 0;
        if (message.memberCount != null && message.hasOwnProperty("memberCount"))
            object.memberCount = message.memberCount;
        if (message.members && message.members.length) {
            object.members = [];
            for (var j = 0; j < message.members.length; ++j)
                object.members[j] = message.members[j];
        }
        return object;
    };

    /**
     * Converts this ChatroomMemberInfo to JSON.
     * @function toJSON
     * @memberof ChatroomMemberInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatroomMemberInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatroomMemberInfo;
})();

module.exports = $root;
