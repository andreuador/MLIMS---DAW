<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
version="1.0">

    <xsl:template match="/">
    <html>
        <body><xsl:text>&#10;</xsl:text>
            <h1><xsl:value-of select="secondary-school/name"></xsl:value-of></h1>
            <xsl:apply-templates />
        </body><xsl:text>&#10;</xsl:text>
    </html>
    </xsl:template>

    <xsl:template match="secondary-school/name">
    </xsl:template>

    <xsl:template match="web">
    </xsl:template>

    <xsl:template match="cycles">
        <xsl:apply-templates />
    </xsl:template>

    <xsl:template match="cycles/name">
        <p><xsl:value-of select="."/></p>
    </xsl:template>

    <xsl:template match="cycles/grade">
    </xsl:template>

</xsl:stylesheet>
